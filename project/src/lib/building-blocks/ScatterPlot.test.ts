import { ScatterPlot } from './ScatterPlot';
import { createSvgElement } from '@wounded-pixels/svg-bindings';
import { results } from './ScatterPlot.stories';

test('basic construction', () => {
  expect(results.basic.outerHTML).toMatchInlineSnapshot(
    `"<div style=\\"width: 200px; height: 400px; border: 1px solid black;\\"><svg width=\\"100%\\" height=\\"auto\\" viewBox=\\"0 0 100 200\\" transform=\\"scale(1,-1)\\"><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"65\\" cy=\\"150\\" r=\\"3\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"70\\" cy=\\"155\\" r=\\"3\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"75\\" cy=\\"160\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"50\\" cy=\\"100\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"55\\" cy=\\"110\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"60\\" cy=\\"115\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"65\\" cy=\\"120\\" r=\\"3\\"></circle></svg></div>"`
  );
});

test('zoomed', () => {
  expect(results.zoomed.outerHTML).toMatchInlineSnapshot(
    `"<div style=\\"width: 250px; height: 600px; border: 1px solid black;\\"><svg width=\\"100%\\" height=\\"auto\\" viewBox=\\"50 100 25 60\\" transform=\\"scale(1,-1)\\"><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"65\\" cy=\\"150\\" r=\\"3\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"70\\" cy=\\"155\\" r=\\"3\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"75\\" cy=\\"160\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"50\\" cy=\\"100\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"55\\" cy=\\"110\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"60\\" cy=\\"115\\" r=\\"3\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"black\\" stroke-width=\\"0.5\\" cx=\\"65\\" cy=\\"120\\" r=\\"3\\"></circle></svg></div>"`
  );
});
