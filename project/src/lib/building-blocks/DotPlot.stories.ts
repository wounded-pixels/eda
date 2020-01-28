import { storiesOf } from '@storybook/html';
import { DotPlot } from './DotPlot';
import { createResizableDiv } from '@wounded-pixels/svg-bindings';

const fred = { id: 1, name: 'Fred', height: 64, weight: 150, gender: 'm' };
const barney = { id: 2, name: 'Barney', height: 70, weight: 155, gender: 'm' };
const ted = { id: 3, name: 'Ted', height: 75, weight: 160, gender: 'm' };

const wilma = { id: 11, name: 'Wilma', height: 50, weight: 100, gender: 'f' };
const betty = { id: 12, name: 'Betty', height: 53, weight: 110, gender: 'f' };
const alice = { id: 13, name: 'Alice', height: 62, weight: 115, gender: 'f' };
const tina = { id: 14, name: 'Tina', height: 66, weight: 120, gender: 'f' };

const data = [fred, barney, ted, wilma, betty, alice, tina];

export const results: { [key: string]: HTMLElement } = {};
results.basic = createResizableDiv(200, 100, 300, 150, 400, 200);

results.zoomed = createResizableDiv(100, 200, 150, 300, 200, 400);
results.changes = createResizableDiv(100, 100, 150, 150, 200, 200);

new DotPlot(results.basic)
  .id(d => d.id)
  .domain(0, 100)
  .value(d => d.height)
  .label(d => d.name)
  .tooltip((d: { name: string }) => d.name, [
    {
      label: 'gender',
      valueProducer: (d: { gender: number }) => '' + d.gender,
    },
  ])
  .update(data);

new DotPlot(results.zoomed)
  .id(d => d.id)
  .domain(40, 80)
  .value(d => d.height)
  .label(d => d.name)
  .fill(d => (d.gender === 'm' ? 'blue' : 'orange'))
  .radius(5)
  .backgroundFill('lightgrey')
  .axisStroke('none')
  .tickStrokeWidth(1)
  .tickStroke('white')
  .plotTitle('Heights')
  .xAxisLabel('height (inches)')
  .leftMarginRatio(0.4)
  .rightMarginRatio(0.1)
  .update(data);

const changes = new DotPlot(results.changes)
  .id(d => d.id)
  .domain(0, 100)
  .value(d => d.height)
  .label(d => d.name);

changes.update(data);
wilma.height = 55;
changes.update(data);
wilma.height = 50;

storiesOf('Dot Plot', module)
  .add('basic construction', () => results.basic)
  .add('zoomed', () => results.zoomed)
  .add('changes', () => results.changes);
