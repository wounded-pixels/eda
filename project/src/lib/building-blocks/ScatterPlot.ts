import {
  Circles,
  KeyFunction,
  Lines,
  NumberFunction,
  NumberProducer,
  StringProducer,
  Text,
  createResponsiveSvg,
  createSvgElement,
} from '@wounded-pixels/svg-bindings';

import { calculateDefaultTicks } from '../util/calculations';

export class ScatterPlot {
  private readonly parent: Element;
  private outer: SVGElement;
  private svg: SVGElement;
  private circles: Circles | null = null;
  private keyFunction: KeyFunction = d => d.id;
  private domainMinimum: number = 0;
  private domainMaximum: number = 100;
  private rangeMinimum: number = 0;
  private rangeMaximum: number = 100;
  private xFunction?: NumberFunction | null;
  private yFunction?: NumberFunction | null;
  private fillProducer: StringProducer = 'grey';
  private radiusProducer: NumberProducer = 4;
  private opacityProducer: NumberProducer = 0.5;
  private strokeProducer: StringProducer = 'grey';
  private strokeWidthProducer: NumberProducer = 1;
  private backgroundFillValue: string = 'none';
  private axisStrokeValue: string = 'grey';
  private axisStrokeWidthValue: number = 3;
  private tickStrokeWidthValue: number = 0.5;
  private tickStrokeValue: string = 'lightgrey';
  private xTickValues: number[] = [];
  private customXTicks: boolean = false;
  private yTickValues: number[] = [];
  private customYTicks: boolean = false;
  private plotTitleValue: string = '';
  private fontFamilyValue: 'serif' | 'sans-serif' = 'sans-serif';
  private xAxisLabelValue: string = '';
  private yAxisLabelValue: string = '';
  private topMarginRatioValue: number = 0.15;
  private bottomMarginRatioValue: number = 0.24;
  private leftMarginRatioValue: number = 0.35;
  private rightMarginRatioValue: number = 0.1;
  private xScale: number = 1;
  private yScale: number = 1;

  private static pathId: number = 0;

  // todo maybe pass themes in constructor?

  constructor(parent: Element) {
    this.parent = parent;
    this.outer = createResponsiveSvg(parent);
    this.svg = createResponsiveSvg(this.outer);
  }

  id(keyFunction: KeyFunction): ScatterPlot {
    this.keyFunction = keyFunction;

    this.circles = null;
    return this;
  }

  domain(minimum: number, maximum: number): ScatterPlot {
    this.domainMinimum = minimum;
    this.domainMaximum = maximum;

    if (!this.customXTicks) {
      this.xTickValues = calculateDefaultTicks(
        this.domainMinimum,
        this.domainMaximum
      );
    }

    this.circles = null;
    return this;
  }

  range(minimum: number, maximum: number): ScatterPlot {
    this.rangeMinimum = minimum;
    this.rangeMaximum = maximum;

    if (!this.customYTicks) {
      this.yTickValues = calculateDefaultTicks(
        this.rangeMinimum,
        this.rangeMaximum
      );
    }

    this.circles = null;
    return this;
  }

  position(xFunction: NumberFunction, yFunction: NumberFunction): ScatterPlot {
    this.xFunction = xFunction;
    this.yFunction = yFunction;

    this.circles = null;
    return this;
  }

  fill(fillProducer: StringProducer): ScatterPlot {
    this.fillProducer = fillProducer;

    this.circles = null;
    return this;
  }

  radius(radiusProducer: NumberProducer): ScatterPlot {
    this.radiusProducer = radiusProducer;

    this.circles = null;
    return this;
  }

  opacity(opacityProducer: NumberProducer): ScatterPlot {
    this.opacityProducer = opacityProducer;

    this.circles = null;
    return this;
  }

  stroke(strokeProducer: StringProducer): ScatterPlot {
    this.strokeProducer = strokeProducer;

    this.circles = null;
    return this;
  }

  strokeWidth(strokeWidthProducer: NumberProducer) {
    this.strokeWidthProducer = strokeWidthProducer;

    this.circles = null;
    return this;
  }

  axisStroke(stroke: string): ScatterPlot {
    this.axisStrokeValue = stroke;

    this.circles = null;
    return this;
  }

  axisStrokeWidth(axisWidth: number) {
    this.axisStrokeWidthValue = axisWidth;

    this.circles = null;
    return this;
  }

  xTicks(xTicks: number[]) {
    this.xTickValues = xTicks;
    this.customXTicks = true;

    this.circles = null;
    return this;
  }

  yTicks(yTicks: number[]) {
    this.yTickValues = yTicks;
    this.customYTicks = true;

    this.circles = null;
    return this;
  }

  tickStrokeWidth(width: number) {
    this.tickStrokeWidthValue = width;

    this.circles = null;
    return this;
  }

  tickStroke(stroke: string) {
    this.tickStrokeValue = stroke;

    this.circles = null;
    return this;
  }

  backgroundFill(fill: string) {
    this.backgroundFillValue = fill;

    this.circles = null;
    return this;
  }

  plotTitle(title: string) {
    this.plotTitleValue = title;

    this.circles = null;
    return this;
  }

  xAxisLabel(value: string) {
    this.xAxisLabelValue = value;

    this.circles = null;
    return this;
  }

  yAxisLabel(value: string) {
    this.yAxisLabelValue = value;

    this.circles = null;
    return this;
  }

  fontFamily(value: 'serif' | 'sans-serif') {
    this.fontFamilyValue = value;

    this.circles = null;
    return this;
  }

  leftMarginRatio(value: number) {
    this.leftMarginRatioValue = value;

    this.circles = null;
    return this;
  }

  rightMarginRatio(value: number) {
    this.rightMarginRatioValue = value;

    this.circles = null;
    return this;
  }

  topMarginRatio(value: number) {
    this.topMarginRatioValue = value;

    this.circles = null;
    return this;
  }

  bottomMarginRatio(value: number) {
    this.bottomMarginRatioValue = value;

    this.circles = null;
    return this;
  }

  update(data: any[]) {
    // recreate if too much has changed
    if (this.circles === null) {
      const actualInnerWidth = this.domainMaximum - this.domainMinimum;
      const actualInnerHeight = this.rangeMaximum - this.rangeMinimum;

      const innerWidth = 100;
      const innerHeight = Math.max(
        innerWidth / 2,
        Math.min(
          innerWidth * 2,
          (innerWidth * actualInnerHeight) / actualInnerWidth
        )
      );
      this.xScale = innerWidth / actualInnerWidth;
      this.yScale = (-1 * innerHeight) / actualInnerHeight;

      const topMargin = innerHeight * this.topMarginRatioValue;
      const bottomMargin = innerHeight * this.bottomMarginRatioValue;
      const leftMargin = innerWidth * this.leftMarginRatioValue;
      const rightMargin = innerWidth * this.rightMarginRatioValue;

      const outerWidth = innerWidth + leftMargin + rightMargin;
      const outerHeight = innerHeight + topMargin + bottomMargin;

      const bottom = this.yScale * this.rangeMinimum;
      const top = this.yScale * this.rangeMaximum;

      const adjustedFontSize = Math.floor(
        Math.min(innerWidth, innerHeight) * 0.1
      );

      this.parent.innerHTML = '';

      this.outer = createResponsiveSvg(this.parent);
      this.svg = createResponsiveSvg(this.outer);

      this.svg.setAttribute(
        'viewBox',
        `
        ${this.xScale * this.domainMinimum}
        ${this.yScale * this.rangeMaximum}
        ${innerWidth} ${innerHeight}`
      );
      this.svg.setAttribute('x', '' + this.xScale * this.domainMinimum);
      this.svg.setAttribute('y', '' + this.yScale * this.rangeMaximum);
      this.svg.setAttribute('width', '' + innerWidth);
      this.svg.setAttribute('height', '' + innerHeight);

      this.outer.setAttribute(
        'viewBox',
        `
        ${this.xScale * this.domainMinimum - leftMargin}
        ${this.yScale * this.rangeMaximum - topMargin}
        ${outerWidth}
        ${outerHeight}`
      );

      // inner background
      createSvgElement('rect', this.svg, {
        x: '' + this.xScale * this.domainMinimum,
        y: '' + this.yScale * this.rangeMaximum,
        width: '' + innerWidth,
        height: '' + innerHeight,
        fill: this.backgroundFillValue,
      });

      this.circles = new Circles(this.svg, this.keyFunction);

      const xFunction = (d: any) => {
        return this.xFunction ? this.xScale * this.xFunction(d) : 0;
      };

      const yFunction = (d: any) => {
        return this.yFunction ? this.yScale * this.yFunction(d) : 0;
      };

      this.circles
        .fill(this.fillProducer)
        .opacity(this.opacityProducer)
        .r(this.radiusProducer)
        .stroke(this.strokeProducer)
        .strokeWidth(this.strokeWidthProducer)
        .cx(xFunction)
        .cy(yFunction);

      const xTickModel = this.xTickValues.map((xPosition, index) => {
        return {
          id: index,
          xPosition,
        };
      });

      // vertical tick lines
      new Lines(this.svg, m => m.id)
        .x1(m => this.xScale * m.xPosition)
        .y1(bottom)
        .x2(m => this.xScale * m.xPosition)
        .y2(top)
        .stroke(this.tickStrokeValue)
        .strokeWidth(this.tickStrokeWidthValue)
        .update(xTickModel);

      const yTickModel = this.yTickValues.map((yPosition, index) => {
        return {
          id: index,
          yPosition: yPosition,
        };
      });

      // horizontal tick lines
      new Lines(this.svg, m => m.id)
        .x1(this.xScale * this.domainMinimum)
        .y1(m => this.yScale * m.yPosition)
        .x2(this.xScale * this.domainMaximum)
        .y2(m => this.yScale * m.yPosition)
        .stroke(this.tickStrokeValue)
        .strokeWidth(this.tickStrokeWidthValue)
        .update(yTickModel);

      // x tick labels
      new Text(this.outer, m => m.id)
        .x(m => this.xScale * m.xPosition)
        .y(bottom + 0.1 * bottomMargin)
        .alignmentBaseline('hanging')
        .textAnchor('middle')
        .fontSize('' + (adjustedFontSize - 1) + 'px')
        .stroke('none')
        .fill('black')
        .bold(false)
        .fontFamily(this.fontFamilyValue)
        .text(m => m.xPosition)
        .update(xTickModel);

      // y tick labels
      new Text(this.outer, m => m.id)
        .x(this.xScale * this.domainMinimum - 0.05 * leftMargin)
        .y(m => this.yScale * m.yPosition)
        .alignmentBaseline('middle')
        .textAnchor('end')
        .fontSize('' + (adjustedFontSize - 1) + 'px')
        .stroke('none')
        .fill('black')
        .bold(false)
        .fontFamily(this.fontFamilyValue)
        .text(m => '' + m.yPosition)
        .update(yTickModel);

      // x axis
      createSvgElement('line', this.svg, {
        x1: '' + this.xScale * this.domainMinimum,
        y1: '' + bottom,
        x2: '' + this.xScale * this.domainMaximum,
        y2: '' + bottom,
        stroke: this.axisStrokeValue,
        'stroke-width': '' + this.axisStrokeWidthValue,
      });

      // y axis
      createSvgElement('line', this.svg, {
        x1: '' + this.xScale * this.domainMinimum,
        y1: '' + bottom,
        x2: '' + this.xScale * this.domainMinimum,
        y2: '' + top,
        stroke: this.axisStrokeValue,
        'stroke-width': '' + this.axisStrokeWidthValue,
      });

      const plotLabel = createSvgElement('text', this.outer, {
        x: '' + (this.xScale * this.domainMinimum + innerWidth / 2),
        y: '' + (this.yScale * this.rangeMaximum - topMargin / 2),
        'alignment-baseline': 'middle',
        'text-anchor': 'middle',
        stroke: 'none',
        fill: 'black',
        'font-size': '' + adjustedFontSize + 'px',
        'font-family': this.fontFamilyValue,
        'font-weight': 'bold',
      });
      plotLabel.innerHTML = this.plotTitleValue;

      const xAxisLabel = createSvgElement('text', this.outer, {
        x: '' + (this.xScale * this.domainMinimum + innerWidth / 2),
        y: '' + (bottom + 0.8 * bottomMargin),
        'alignment-baseline': 'baseline',
        'text-anchor': 'middle',
        stroke: 'none',
        fill: 'black',
        'font-size': '' + adjustedFontSize + 'px',
        'font-family': this.fontFamilyValue,
        'font-weight': 'normal',
      });
      xAxisLabel.innerHTML = this.xAxisLabelValue;

      const xForYAxisLabel = +(
        this.xScale * this.domainMinimum -
        0.72 * leftMargin
      );

      const pathId = 'yAxisPathId' + ScatterPlot.pathId++;
      createSvgElement('path', this.outer, {
        id: pathId,
        d: `M ${xForYAxisLabel} ${bottom -
          0.25 * innerHeight} L ${xForYAxisLabel} ${top}`,
      });

      const yAxisLabel = createSvgElement('text', this.outer, {
        'alignment-baseline': 'middle',
        'text-anchor': 'start',
        stroke: 'none',
        fill: 'black',
        'font-size': '' + adjustedFontSize + 'px',
        'font-family': this.fontFamilyValue,
        'font-weight': 'normal',
      });
      yAxisLabel.innerHTML = `
        <textPath href="#${pathId}">
            ${this.yAxisLabelValue}
        </textPath>
      `;
    }

    this.circles.update(data);
  }
}
