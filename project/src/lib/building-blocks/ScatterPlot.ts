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

export class ScatterPlot {
  private readonly parent: Element;
  private readonly outer: SVGElement;
  private readonly svg: SVGElement;
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
  private yTickValues: number[] = [];

  // todo coherent defaults
  // todo maybe pass themes?

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

    this.circles = null;
    return this;
  }

  range(minimum: number, maximum: number): ScatterPlot {
    this.rangeMinimum = minimum;
    this.rangeMaximum = maximum;

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

    this.circles = null;
    return this;
  }

  yTicks(yTicks: number[]) {
    this.yTickValues = yTicks;

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

  update(data: any[]) {
    // recreate if too much has changed
    if (this.circles === null) {
      const innerWidth = this.domainMaximum - this.domainMinimum;
      const innerHeight = this.rangeMaximum - this.rangeMinimum;

      // todo: percentage -> field
      const topMargin = innerHeight * 0.1;
      const bottomMargin = innerHeight * 0.12;
      const leftMargin = innerWidth * 0.18;
      const rightMargin = innerWidth * 0.06;

      const outerWidth = innerWidth + leftMargin + rightMargin;
      const outerHeight = innerHeight + topMargin + bottomMargin;

      this.svg.innerHTML = '';
      this.svg.setAttribute(
        'viewBox',
        `
        ${this.domainMinimum}
        ${-1 * this.rangeMaximum}
        ${innerWidth} ${innerHeight}`
      );
      this.svg.setAttribute('x', '' + this.domainMinimum);
      this.svg.setAttribute('y', '' + -1 * this.rangeMaximum);
      this.svg.setAttribute('width', '' + innerWidth);
      this.svg.setAttribute('height', '' + innerHeight);

      this.outer.setAttribute(
        'viewBox',
        `
        ${this.domainMinimum - leftMargin}
        ${-1 * this.rangeMaximum - topMargin}
        ${outerWidth}
        ${outerHeight}`
      );

      // inner background
      createSvgElement('rect', this.svg, {
        x: '' + 0,
        y: '' + -1 * this.rangeMaximum,
        width: '' + innerWidth,
        height: '' + innerHeight,
        fill: this.backgroundFillValue,
      });

      this.circles = new Circles(this.svg, this.keyFunction);

      const xFunction = (d: any) => {
        return this.xFunction ? this.xFunction(d) : 0;
      };

      const yFunction = (d: any) => {
        return this.yFunction ? -1 * this.yFunction(d) : 0;
      };

      this.circles
        .fill(this.fillProducer)
        .opacity(this.opacityProducer)
        .r(this.radiusProducer)
        .stroke(this.strokeProducer)
        .strokeWidth(this.strokeWidthProducer)
        .cx(xFunction)
        .cy(yFunction);

      const bottom = -1 * this.rangeMinimum;
      const top = -1 * this.rangeMaximum;

      const adjustedFontSize = Math.floor(
        Math.min(innerWidth, innerHeight) * 0.1
      );

      const xTickModel = this.xTickValues.map((xPosition, index) => {
        return {
          id: index,
          xPosition,
        };
      });

      const xTickLines = new Lines(this.svg, m => m.id)
        .x1(m => m.xPosition)
        .y1(bottom)
        .x2(m => m.xPosition)
        .y2(top)
        .stroke(this.tickStrokeValue)
        .strokeWidth(this.tickStrokeWidthValue)
        .update(xTickModel);

      const yTickModel = this.yTickValues.map((yPosition, index) => {
        return {
          id: index,
          yPosition: -yPosition,
        };
      });

      const yTickLines = new Lines(this.svg, m => m.id)
        .x1(this.domainMinimum)
        .y1(m => m.yPosition)
        .x2(this.domainMaximum)
        .y2(m => m.yPosition)
        .stroke(this.tickStrokeValue)
        .strokeWidth(this.tickStrokeWidthValue)
        .update(yTickModel);

      const xLabels = new Text(this.outer, m => m.id)
        .x(m => m.xPosition)
        .y(bottom + bottomMargin / 2)
        .alignmentBaseline('middle')
        .textAnchor('middle')
        .fontSize('' + adjustedFontSize + 'px')
        .stroke('none')
        .bold(true)
        .text(m => m.xPosition)
        .update(xTickModel);

      const yLabels = new Text(this.outer, m => m.id)
        .x(this.domainMinimum - leftMargin / 2)
        .y(m => m.yPosition)
        .alignmentBaseline('middle')
        .textAnchor('middle')
        .fontSize('' + adjustedFontSize + 'px')
        .stroke('none')
        .bold(true)
        .text(m => '' + -1 * m.yPosition)
        .update(yTickModel);

      // x axis
      createSvgElement('line', this.svg, {
        x1: '' + this.domainMinimum,
        y1: '' + bottom,
        x2: '' + this.domainMaximum,
        y2: '' + bottom,
        stroke: this.axisStrokeValue,
        'stroke-width': '' + this.axisStrokeWidthValue,
      });

      // y axis
      createSvgElement('line', this.svg, {
        x1: '' + this.domainMinimum,
        y1: '' + bottom,
        x2: '' + this.domainMinimum,
        y2: '' + top,
        stroke: this.axisStrokeValue,
        'stroke-width': '' + this.axisStrokeWidthValue,
      });
    }

    this.circles.update(data);
  }
}
