import {
  Circles,
  KeyFunction,
  Lines,
  NumberFunction,
  NumberProducer,
  StringFunction,
  StringProducer,
  Text,
  createResponsiveSvg,
  createSvgElement,
} from '@wounded-pixels/svg-bindings';

import { Plot } from './Plot';

export class SinaPlot extends Plot {
  private circles: Circles = new Circles(this.svg, () => '');
  private labels: Text = new Text(this.svg, () => '');
  private rowLines: Lines = new Lines(this.svg, () => '');

  private radiusProducer: NumberProducer = 4;
  private labelFunction: StringFunction = () => '';
  private categoryValue: string;
  private rowHeight: number = 10;
  private categoryToRowMap: { [key: string]: number } = {};
  private categoryInstances: string[] = [];
  private categoryLabels: { id: number; name: string }[] = [];

  constructor(parent: Element, categoryValue: string) {
    super(parent);
    this.categoryValue = categoryValue;
    this.yFunction = d => {
      const categoryInstance = d[this.categoryValue];
      return this.categoryToRowMap[categoryInstance] * this.rowHeight;
    };
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
        };
      });

      this.rowHeight =
        (this.rangeMaximum - this.rangeMinimum) /
        (this.categoryInstances.length + 1);

      this.circles = new Circles(this.svg, this.keyFunction);

      this.circles
        .fill(this.fillProducer)
        .opacity(this.opacityProducer)
        .r(this.radiusProducer)
        .stroke(this.strokeProducer)
        .strokeWidth(this.strokeWidthProducer)
        .cx(this.scaledXFunction)
        .cy(this.scaledYFunction);

      // y axis row labels
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

      this.rowLines = new Lines(this.svg, m => m.id)
        .x1(this.xScale * this.domainMinimum)
        .y1(this.scaledYFunction)
        .x2(this.xScale * this.domainMaximum)
        .y2(this.scaledYFunction)
        .stroke(this.tickStrokeValue)
        .strokeWidth(this.tickStrokeWidthValue);
    }

    this.labels.update(this.categoryLabels);
    this.rowLines.update(data);
    this.circles.update(data);
  }
}
