import {
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
import { LabeledValueProducer } from '../../../../../svg-bindings/project/src/lib/bindings/Types';

export abstract class Plot {
  private readonly parent: Element;
  private readonly intermediate: Element;
  private plotLabel: Element | undefined;
  private xAxisLabelElement: Element | undefined;
  private xTickLabels: Text | undefined;

  protected outer: SVGElement;
  protected svg: SVGElement;
  protected keyFunction: KeyFunction = d => d.id;

  protected domainMinimum: number = 0;
  protected domainMaximum: number = 100;
  protected rangeMinimum: number = 0;
  protected rangeMaximum: number = 100;

  protected aspectRatioValue: number = -1;

  protected leftMargin: number = 1;
  protected adjustedFontSize: number = 10;

  protected xFunction: NumberFunction = () => 1;
  protected yFunction: NumberFunction = () => 1;

  protected scaledXFunction: NumberFunction = () => 1;
  protected scaledYFunction: NumberFunction = () => 1;

  protected fillProducer: StringProducer = 'grey';
  protected opacityProducer: NumberProducer = 0.5;
  protected strokeProducer: StringProducer = 'grey';
  protected strokeWidthProducer: NumberProducer = 1;

  protected readonly tooltipContainer: HTMLElement;
  protected tooltipBackgroundColorProducer: StringProducer = '#ebdfbe';
  protected tooltipLabeledValueProducers: LabeledValueProducer[] = [];
  protected tooltipTitleProducer: StringProducer = '';

  private backgroundFillValue: string = 'none';
  private axisStrokeValue: string = 'grey';
  private axisStrokeWidthValue: number = 3;
  protected tickStrokeWidthValue: number = 0.5;
  protected tickStrokeValue: string = 'lightgrey';
  private xTickValues: number[] = [];
  private customXTicks: boolean = false;
  private yTickValues: number[] = [];
  private customYTicks: boolean = false;
  private plotTitleValue: string = '';
  protected fontFamilyValue: 'serif' | 'sans-serif' = 'sans-serif';
  private xAxisLabelValue: string = '';
  private yAxisLabelValue: string = '';
  private topMarginRatioValue: number = 0.15;
  private bottomMarginRatioValue: number = 0.24;
  private leftMarginRatioValue: number = 0.35;
  private rightMarginRatioValue: number = 0.1;
  protected xScale: number = 1;
  protected yScale: number = 1;

  protected dirty: boolean = true;

  private static pathId: number = 0;

  protected constructor(parent: HTMLElement) {
    const intermediate = document.createElement('div');
    parent.appendChild(intermediate);
    this.tooltipContainer = parent;
    this.parent = parent;
    this.intermediate = intermediate;
    this.outer = createResponsiveSvg(parent);
    this.svg = createResponsiveSvg(this.outer);
  }

  protected abstract updateContents(dirty: boolean, data: any[]): void;

  id(keyFunction: KeyFunction) {
    this.keyFunction = keyFunction;

    this.dirty = true;
    return this;
  }

  domain(minimum: number, maximum: number) {
    this.domainMinimum = minimum;
    this.domainMaximum = maximum;

    if (!this.customXTicks) {
      this.xTickValues = calculateDefaultTicks(
        this.domainMinimum,
        this.domainMaximum
      );
    }

    this.dirty = true;
    return this;
  }

  tooltip(
    titleProducer: StringProducer,
    labeledValueProducers: LabeledValueProducer[],
    backgroundColorProducer: StringProducer = '#ebdfbe'
  ) {
    this.tooltipTitleProducer = titleProducer;
    this.tooltipLabeledValueProducers = labeledValueProducers;
    this.tooltipBackgroundColorProducer = backgroundColorProducer;

    return this;
  }

  protected range(minimum: number, maximum: number) {
    this.rangeMinimum = minimum;
    this.rangeMaximum = maximum;

    if (!this.customYTicks) {
      this.yTickValues = calculateDefaultTicks(
        this.rangeMinimum,
        this.rangeMaximum
      );
    }

    this.dirty = true;
    return this;
  }

  aspectRatio(value: number) {
    this.aspectRatioValue = value;
    this.dirty = true;
    return this;
  }

  fill(fillProducer: StringProducer) {
    this.fillProducer = fillProducer;

    this.dirty = true;
    return this;
  }

  opacity(opacityProducer: NumberProducer) {
    this.opacityProducer = opacityProducer;

    this.dirty = true;
    return this;
  }

  stroke(strokeProducer: StringProducer) {
    this.strokeProducer = strokeProducer;

    this.dirty = true;
    return this;
  }

  strokeWidth(strokeWidthProducer: NumberProducer) {
    this.strokeWidthProducer = strokeWidthProducer;

    this.dirty = true;
    return this;
  }

  axisStroke(stroke: string) {
    this.axisStrokeValue = stroke;

    this.dirty = true;
    return this;
  }

  axisStrokeWidth(axisWidth: number) {
    this.axisStrokeWidthValue = axisWidth;

    this.dirty = true;
    return this;
  }

  xTicks(xTicks: number[]) {
    this.xTickValues = xTicks;
    this.customXTicks = true;

    this.dirty = true;
    return this;
  }

  yTicks(yTicks: number[]) {
    this.yTickValues = yTicks;
    this.customYTicks = true;

    this.dirty = true;
    return this;
  }

  tickStrokeWidth(width: number) {
    this.tickStrokeWidthValue = width;

    this.dirty = true;
    return this;
  }

  tickStroke(stroke: string) {
    this.tickStrokeValue = stroke;

    this.dirty = true;
    return this;
  }

  backgroundFill(fill: string) {
    this.backgroundFillValue = fill;

    this.dirty = true;
    return this;
  }

  plotTitle(title: string) {
    this.plotTitleValue = title;

    this.dirty = true;
    return this;
  }

  xAxisLabel(value: string) {
    this.xAxisLabelValue = value;

    this.dirty = true;
    return this;
  }

  yAxisLabel(value: string) {
    this.yAxisLabelValue = value;

    this.dirty = true;
    return this;
  }

  fontFamily(value: 'serif' | 'sans-serif') {
    this.fontFamilyValue = value;

    this.dirty = true;
    return this;
  }

  leftMarginRatio(value: number) {
    this.leftMarginRatioValue = value;

    this.dirty = true;
    return this;
  }

  rightMarginRatio(value: number) {
    this.rightMarginRatioValue = value;

    this.dirty = true;
    return this;
  }

  topMarginRatio(value: number) {
    this.topMarginRatioValue = value;

    this.dirty = true;
    return this;
  }

  bottomMarginRatio(value: number) {
    this.bottomMarginRatioValue = value;

    this.dirty = true;
    return this;
  }

  update(data: any[]) {
    // recreate if too much has changed
    if (this.dirty) {
      const actualInnerWidth = this.domainMaximum - this.domainMinimum;
      const actualInnerHeight = this.rangeMaximum - this.rangeMinimum;

      const innerWidth = 100;
      const innerHeight =
        this.aspectRatioValue > 0
          ? innerWidth / this.aspectRatioValue
          : Math.max(
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
      this.leftMargin = innerWidth * this.leftMarginRatioValue;
      const rightMargin = innerWidth * this.rightMarginRatioValue;

      const outerWidth = innerWidth + this.leftMargin + rightMargin;
      const outerHeight = innerHeight + topMargin + bottomMargin;

      const bottom = this.yScale * this.rangeMinimum;
      const top = this.yScale * this.rangeMaximum;

      this.adjustedFontSize = Math.floor(
        Math.min(innerWidth, innerHeight) * 0.1
      );

      this.intermediate.innerHTML = '';

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
        ${this.xScale * this.domainMinimum - this.leftMargin}
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

      this.scaledXFunction = (d: any) => {
        return this.xScale * this.xFunction(d);
      };

      this.scaledYFunction = (d: any) => {
        const yScale = this.yScale || 1;
        return this.yScale * this.yFunction(d);
      };

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
      if (!this.xTickLabels) {
        this.xTickLabels = new Text(this.outer, m => m.id)
          .x(m => this.xScale * m.xPosition)
          .y(bottom + 0.1 * bottomMargin)
          .alignmentBaseline('hanging')
          .textAnchor('middle')
          .fontSize('' + (this.adjustedFontSize - 1) + 'px')
          .stroke('none')
          .fill('black')
          .bold(false)
          .fontFamily(this.fontFamilyValue)
          .text(m => m.xPosition);
      }
      this.xTickLabels.update(xTickModel);

      // y tick labels
      new Text(this.outer, m => m.id)
        .x(this.xScale * this.domainMinimum - 0.05 * this.leftMargin)
        .y(m => this.yScale * m.yPosition)
        .alignmentBaseline('middle')
        .textAnchor('end')
        .fontSize('' + (this.adjustedFontSize - 1) + 'px')
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

      if (!this.plotLabel) {
        this.plotLabel = createSvgElement('text', this.outer, {
          'alignment-baseline': 'middle',
          'text-anchor': 'middle',
          stroke: 'none',
          fill: 'black',
          'font-weight': 'bold',
        });
      }
      this.plotLabel.innerHTML = this.plotTitleValue;
      this.plotLabel.setAttribute(
        'x',
        '' + (this.xScale * this.domainMinimum + innerWidth / 2)
      );
      this.plotLabel.setAttribute(
        'y',
        '' + (this.yScale * this.rangeMaximum - topMargin / 2)
      );
      this.plotLabel.setAttribute(
        'font-size',
        '' + this.adjustedFontSize + 'px'
      );
      this.plotLabel.setAttribute('font-family', this.fontFamilyValue);

      if (!this.xAxisLabelElement) {
        this.xAxisLabelElement = createSvgElement('text', this.outer, {
          x: '' + (this.xScale * this.domainMinimum + innerWidth / 2),
          y: '' + (bottom + 0.8 * bottomMargin),
          'alignment-baseline': 'baseline',
          'text-anchor': 'middle',
          stroke: 'none',
          fill: 'black',
          'font-size': '' + this.adjustedFontSize + 'px',
          'font-family': this.fontFamilyValue,
          'font-weight': 'normal',
        });
      }
      this.xAxisLabelElement.innerHTML = this.xAxisLabelValue;

      const xForYAxisLabel = +(
        this.xScale * this.domainMinimum -
        0.72 * this.leftMargin
      );

      const pathId = 'yAxisPathId' + Plot.pathId++;
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
        'font-size': '' + this.adjustedFontSize + 'px',
        'font-family': this.fontFamilyValue,
        'font-weight': 'normal',
      });
      yAxisLabel.innerHTML = `
        <textPath href="#${pathId}">
            ${this.yAxisLabelValue}
        </textPath>
      `;
    }

    this.updateContents(this.dirty, data);
    this.dirty = false;
  }
}
