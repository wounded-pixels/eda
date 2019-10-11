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

export class DotPlot extends Plot {
  private circles: Circles = new Circles(this.svg, () => '');
  private labels: Text = new Text(this.svg, () => '');
  private rowLines: Lines = new Lines(this.svg, () => '');
  private dataLength: number = 0;

  private radiusProducer: NumberProducer = 4;
  private labelFunction: StringFunction = () => '';

  private rowHeight: number = 10;

  constructor(parent: Element) {
    super(parent);

    this.yFunction = d => (d._dpSortOrder + 1) * this.rowHeight;
  }

  radius(radiusProducer: NumberProducer) {
    this.radiusProducer = radiusProducer;
    return this;
  }

  value(xFunction: NumberFunction) {
    this.xFunction = xFunction;
    return this;
  }

  label(labelFunction: StringFunction) {
    this.labelFunction = labelFunction;
    return this;
  }

  protected updateContents(dirty: boolean, data: any[]) {
    if (dirty) {
      this.rowHeight =
        (this.rangeMaximum - this.rangeMinimum) / (data.length + 1);

      this.dataLength = data.length;

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
        .text(this.labelFunction);

      this.rowLines = new Lines(this.svg, m => m.id)
        .x1(this.xScale * this.domainMinimum)
        .y1(this.scaledYFunction)
        .x2(this.xScale * this.domainMaximum)
        .y2(this.scaledYFunction)
        .stroke(this.tickStrokeValue)
        .strokeWidth(this.tickStrokeWidthValue);
    }

    data.sort((d1, d2) => {
      const value1 = this.xFunction(d1);
      const value2 = this.xFunction(d2);
      return Math.sign(value1 - value2);
    });

    data.forEach((d, index) => {
      d['_dpSortOrder'] = index;
    });

    this.labels.update(data);
    this.rowLines.update(data);
    this.circles.update(data);
  }
}
