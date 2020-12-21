import {
  Circles,
  Lines,
  NumberFunction,
  Text,
} from '@wounded-pixels/svg-bindings';

import { Plot } from './Plot';

export class SinaPlot extends Plot {
  private circles: Circles | undefined;
  private labels: Text | undefined;
  private rowLines: Lines | undefined;

  private radiusProducer: NumberFunction = () => 1.7;
  private readonly categoryValue: string;
  private rowHeight: number = 10;
  private categoryToRowMap: { [key: string]: number } = {};
  private categoryInstances: string[] = [];
  private categoryLabels: { id: number; name: string }[] = [];

  constructor(parent: HTMLElement, categoryValue: string) {
    super(parent);

    // todo: aspect ratio from parent?? or constructor?
    this.rangeMaximum = 300;
    this.categoryValue = categoryValue;
    this.yFunction = d => {
      const categoryInstance = d[this.categoryValue];
      const rawJitter = d['_edaJitter'] * this.radiusProducer(d) * 2.5;
      const overflowRatio = Math.abs(rawJitter) / (this.rowHeight / 2.3);
      const jitter =
        overflowRatio <= 1
          ? rawJitter
          : (Math.sign(rawJitter) * Math.abs(rawJitter)) %
            (this.rowHeight * 0.45);
      return this.categoryToRowMap[categoryInstance] * this.rowHeight + jitter;
    };
    this.opacity(0.35);
    this.stroke('none');
    this.leftMarginRatio(0.48);
    this.rightMarginRatio(0.05);
  }

  value(xFunction: NumberFunction) {
    this.xFunction = xFunction;
    return this;
  }

  protected updateContents(dirty: boolean, data: any[]) {
    if (dirty) {
      this.categoryToRowMap = {};
      const allCategoryInstances: string[] = data.map(
        d => d[this.categoryValue]
      );
      this.categoryInstances = Array.from(new Set(allCategoryInstances));
      this.categoryInstances.forEach((category, index) => {
        this.categoryToRowMap[category] = index + 1;
      });

      this.categoryLabels = this.categoryInstances.map((ci, index) => {
        return {
          id: index,
          name: ci,
          [this.categoryValue]: ci,
          _edaJitter: 0,
        };
      });

      this.rowHeight =
        (this.rangeMaximum - this.rangeMinimum) /
        (this.categoryInstances.length + 1);

      if (!this.circles) {
        this.circles = new Circles(this.svg, this.keyFunction);

        this.tooltipLabeledValueProducers.length > 0 &&
          this.circles.addTooltip(
            this.tooltipContainer,
            this.tooltipTitleProducer,
            this.tooltipLabeledValueProducers,
            this.tooltipBackgroundColorProducer
          );

        this.circles
          .fill(this.fillProducer)
          .opacity(this.opacityProducer)
          .r(this.radiusProducer)
          .stroke(this.strokeProducer)
          .strokeWidth(this.strokeWidthProducer)
          .cx(this.scaledXFunction)
          .cy(this.scaledYFunction);
      }

      // y axis row labels
      if (!this.labels) {
        this.labels = new Text(this.outer, m => m.id)
          .x(() => this.xScale * this.domainMinimum - 0.05 * this.leftMargin)
          .y(this.scaledYFunction)
          .alignmentBaseline('middle')
          .textAnchor('end')
          .fontSize(() => Math.min(this.rowHeight * 0.95, 10) + 'px')
          .stroke('none')
          .fill('black')
          .bold(false)
          .fontFamily(this.fontFamilyValue)
          .text(d => d.name);
      }

      if (!this.rowLines) {
        this.rowLines = new Lines(this.svg, m => m.id)
          .x1(this.xScale * this.domainMinimum)
          .y1(this.scaledYFunction)
          .x2(this.xScale * this.domainMaximum)
          .y2(this.scaledYFunction)
          .stroke(this.tickStrokeValue)
          .strokeWidth(this.tickStrokeWidthValue);
      }
    }

    const binWidth = this.radiusProducer({}) * 2;
    const numBins =
      (this.xScale * (this.domainMaximum - this.domainMinimum)) / binWidth;

    const binDepths: { [key: string]: number[] } = {};

    this.categoryInstances.forEach(categoryInstance => {
      binDepths[categoryInstance] = [];
      for (let binCtr = 0; binCtr < numBins; binCtr++) {
        binDepths[categoryInstance][binCtr] = 1;
      }
    });

    const scaledDomainMinimum = this.domainMinimum * this.xScale;
    data.forEach(d => {
      const categoryInstance = d[this.categoryValue];
      const scaledValue = this.scaledXFunction(d) - scaledDomainMinimum;
      const binIndex = Math.min(
        numBins - 1,
        Math.max(0, Math.floor(scaledValue / binWidth))
      );
      const currentIndex = binDepths[categoryInstance][binIndex];
      const sign = currentIndex % 2 ? 1 : -1;
      const jitter = Math.floor(currentIndex / 2);
      d['_edaJitter'] = jitter * sign;
      binDepths[categoryInstance][binIndex] = currentIndex + 1;
    });

    this.labels && this.labels.update(this.categoryLabels);
    this.rowLines && this.rowLines.update(this.categoryLabels);
    this.circles && this.circles.update(data);
  }
}
