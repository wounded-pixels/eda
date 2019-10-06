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
import { Plot } from './Plot';

export class ScatterPlot extends Plot {
  private circles: Circles | null = null;
  private radiusProducer: NumberProducer = 4;

  constructor(parent: Element) {
    super(parent);
  }

  radius(radiusProducer: NumberProducer) {
    this.radiusProducer = radiusProducer;
    return this;
  }

  updateContents(dirty: boolean, data: any[]) {
    if (dirty || !this.circles) {
      this.circles = new Circles(this.svg, this.keyFunction);

      this.circles
        .fill(this.fillProducer)
        .opacity(this.opacityProducer)
        .r(this.radiusProducer)
        .stroke(this.strokeProducer)
        .strokeWidth(this.strokeWidthProducer)
        .cx(this.scaledXFunction)
        .cy(this.scaledYFunction);
    }

    this.circles.update(data);
  }
}
