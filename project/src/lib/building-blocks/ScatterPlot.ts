import {
  Circles,
  KeyFunction,
  NumberFunction,
  StringProducer
} from "@wounded-pixels/svg-bindings";

export class ScatterPlot {
  private readonly parent: SVGGraphicsElement;
  private circles: Circles | null = null;
  private keyFunction: KeyFunction = d => d.id;
  private domainMinimum: number = 0;
  private domainMaximum: number = 100;
  private rangeMinimum: number = 0;
  private rangeMaximum: number = 100;
  private xFunction?: NumberFunction | null;
  private yFunction?: NumberFunction | null;
  private fillProducer: StringProducer = "grey";

  constructor(parent: SVGGraphicsElement) {
    this.parent = parent;
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

  update(data: any[]) {
    if (this.circles === null) {
      this.circles = new Circles(this.parent, this.keyFunction);

      const parent = this.parent as any;
      const svgWidth = parent.width.baseVal.value;
      const svgHeight = parent.height.baseVal.value;

      const dataWidth = this.domainMaximum - this.domainMinimum;
      const dataHeight = this.rangeMaximum - this.rangeMinimum;

      const xFunction = (d: any) => {
        const positionX = this.xFunction ? this.xFunction(d) : 0;
        return ((positionX - this.domainMinimum) * svgWidth) / dataWidth;
      };

      const yFunction = (d: any) => {
        const positionY = this.yFunction ? this.yFunction(d) : 0;
        const fromBottom =
          ((positionY - this.rangeMinimum) * svgHeight) / dataHeight;
        return svgHeight - fromBottom;
      };

      this.circles
        .r(3)
        .fill(this.fillProducer)
        .opacity(0.5)
        .stroke("black")
        .strokeWidth(0.5)
        .cx(xFunction)
        .cy(yFunction);
    }

    this.circles.update(data);
  }
}
