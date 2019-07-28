import {
  Circles,
  KeyFunction,
  NumberFunction,
  StringProducer
} from "@wounded-pixels/svg-bindings";

export class ScatterPlot {
  private readonly parent: Element;
  private readonly svg: SVGElement;
  private circles: Circles | null = null;
  private keyFunction: KeyFunction = d => d.id;
  private domainMinimum: number = 0;
  private domainMaximum: number = 100;
  private rangeMinimum: number = 0;
  private rangeMaximum: number = 100;
  private xFunction?: NumberFunction | null;
  private yFunction?: NumberFunction | null;
  private fillProducer: StringProducer = "grey";

  constructor(parent: Element) {
    this.parent = parent;
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttribute("width", "100%");
    this.svg.setAttribute("height", "auto");
    this.parent.appendChild(this.svg);
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
      this.svg.setAttribute(
        "viewBox",
        `${this.domainMinimum} ${this.rangeMinimum} ${this.domainMaximum -
          this.domainMinimum} ${this.rangeMaximum - this.rangeMinimum}`
      );
      this.svg.setAttribute("transform", `scale(1,-1)`);

      this.circles = new Circles(this.svg, this.keyFunction);

      const xFunction = (d: any) => {
        return this.xFunction ? this.xFunction(d) : 0;
      };

      const yFunction = (d: any) => {
        return this.yFunction ? this.yFunction(d) : 0;
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
