import { ScatterPlot } from './ScatterPlot';
import { createSvgElement } from '@wounded-pixels/svg-bindings';
import { results } from './ScatterPlot.stories';

test('basic construction', () => {
  expect(results.basic.outerHTML).toMatchInlineSnapshot(`
    "<div style=\\"min-width: 200px; min-height: 200px; width: 300px; height: 300px; max-width: 400px; max-height: 400px; border: 1px solid black; resize: both; overflow: hidden;\\"><svg viewBox=\\"0
             -200
             100
             200\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\"><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"65\\" cy=\\"-150\\" r=\\"3\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"70\\" cy=\\"-155\\" r=\\"3\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"75\\" cy=\\"-160\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"50\\" cy=\\"-100\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"55\\" cy=\\"-110\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"60\\" cy=\\"-115\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"65\\" cy=\\"-120\\" r=\\"3\\"></circle></svg></div>"
  `);
});

test('zoomed', () => {
  expect(results.zoomed.outerHTML).toMatchInlineSnapshot(`
    "<div style=\\"min-width: 200px; min-height: 200px; width: 300px; height: 300px; max-width: 400px; max-height: 400px; border: 1px solid black; resize: both; overflow: hidden;\\"><svg viewBox=\\"45
             -170
             35
             80\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\"><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"65\\" cy=\\"-150\\" r=\\"3\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"70\\" cy=\\"-155\\" r=\\"3\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"75\\" cy=\\"-160\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"50\\" cy=\\"-100\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"55\\" cy=\\"-110\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"60\\" cy=\\"-115\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"65\\" cy=\\"-120\\" r=\\"3\\"></circle></svg></div>"
  `);
});
