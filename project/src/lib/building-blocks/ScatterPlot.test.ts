import { ScatterPlot } from './ScatterPlot';
import { createSvgElement } from '@wounded-pixels/svg-bindings';
import { results } from './ScatterPlot.stories';

test('basic construction', () => {
  expect(results.basic.outerHTML).toMatchInlineSnapshot(`
    "<div style=\\"min-width: 200px; min-height: 200px; width: 300px; height: 300px; max-width: 400px; max-height: 400px; border: 1px solid black; resize: both; overflow: hidden;\\"><svg viewBox=\\"0
             0
             100
             200\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\"><svg viewBox=\\"0
             -200
             100
             200\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\" x=\\"15\\" y=\\"30\\" width=\\"70\\" height=\\"140\\"><line x1=\\"0\\" y1=\\"0\\" x2=\\"100\\" y2=\\"0\\" stroke=\\"black\\" stroke-width=\\"3\\"></line><line x1=\\"0\\" y1=\\"0\\" x2=\\"0\\" y2=\\"-200\\" stroke=\\"black\\" stroke-width=\\"3\\"></line><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.2\\" cx=\\"65\\" cy=\\"-150\\" r=\\"3\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.2\\" cx=\\"70\\" cy=\\"-155\\" r=\\"3\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.2\\" cx=\\"75\\" cy=\\"-160\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.2\\" cx=\\"50\\" cy=\\"-100\\" r=\\"5\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.2\\" cx=\\"55\\" cy=\\"-110\\" r=\\"5\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.2\\" cx=\\"60\\" cy=\\"-115\\" r=\\"5\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.2\\" cx=\\"65\\" cy=\\"-120\\" r=\\"5\\"></circle></svg></svg></div>"
  `);
});

test('zoomed', () => {
  expect(results.zoomed.outerHTML).toMatchInlineSnapshot(`
    "<div style=\\"min-width: 200px; min-height: 200px; width: 300px; height: 300px; max-width: 400px; max-height: 400px; border: 1px solid black; resize: both; overflow: hidden;\\"><svg viewBox=\\"0
             0
             100
             100\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\"><svg viewBox=\\"45
             -160
             45
             45\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\" x=\\"15\\" y=\\"15\\" width=\\"70\\" height=\\"70\\"><line x1=\\"45\\" y1=\\"-115\\" x2=\\"90\\" y2=\\"-115\\" stroke=\\"black\\" stroke-width=\\"0.5\\"></line><line x1=\\"45\\" y1=\\"-115\\" x2=\\"45\\" y2=\\"-160\\" stroke=\\"black\\" stroke-width=\\"0.5\\"></line><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"65\\" cy=\\"-150\\" r=\\"1\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"70\\" cy=\\"-155\\" r=\\"1\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"75\\" cy=\\"-160\\" r=\\"1\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.5\\" cx=\\"50\\" cy=\\"-100\\" r=\\"1.5\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.5\\" cx=\\"55\\" cy=\\"-110\\" r=\\"1.5\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.5\\" cx=\\"60\\" cy=\\"-115\\" r=\\"1.5\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"blue\\" stroke-width=\\"0.5\\" cx=\\"65\\" cy=\\"-120\\" r=\\"1.5\\"></circle></svg></svg></div>"
  `);
});
