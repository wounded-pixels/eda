import { storiesOf } from '@storybook/html';
import { ScatterPlot } from './ScatterPlot';
import { createResizableDiv } from '@wounded-pixels/svg-bindings';

const fred = { id: 1, height: 65, weight: 150, gender: 'm' };
const barney = { id: 2, height: 70, weight: 155, gender: 'm' };
const ted = { id: 3, height: 75, weight: 160, gender: 'm' };

const wilma = { id: 11, height: 50, weight: 100, gender: 'f' };
const betty = { id: 12, height: 55, weight: 110, gender: 'f' };
const alice = { id: 13, height: 60, weight: 115, gender: 'f' };
const tina = { id: 14, height: 65, weight: 120, gender: 'f' };

const data = [fred, barney, ted, wilma, betty, alice, tina];

export const results: any = {};
results.basic = createResizableDiv();
results.zoomed = createResizableDiv();
results.ticks = createResizableDiv();

const basicPlot = new ScatterPlot(results.basic)
  .id(d => d.id)
  .domain(0, 100)
  .range(0, 200)
  .fill(d => (d.gender === 'm' ? 'blue' : 'green'))
  .opacity(0.5)
  .radius(d => (d.gender === 'm' ? 3 : 5))
  .stroke('blue')
  .strokeWidth(0.2)
  .axisWidth(3);

basicPlot.update(data);
basicPlot
  .position(d => d.height, d => d.weight)
  .fill(d => (d.gender === 'm' ? 'blue' : 'orange'));
basicPlot.update(data);
basicPlot.update(data);

const zoomedPlot = new ScatterPlot(results.zoomed)
  .id(d => d.id)
  .domain(45, 90)
  .range(115, 160)
  .position(d => d.height, d => d.weight)
  .fill(d => (d.gender === 'm' ? 'blue' : 'orange'))
  .opacity(0.5)
  .radius(d => (d.gender === 'm' ? 1 : 1.5))
  .stroke(d => (d.gender === 'm' ? 'black' : 'blue'))
  .strokeWidth(0.5)
  .axisWidth(0.5);
zoomedPlot.update(data);

const tickedPlot = new ScatterPlot(results.ticks)
  .id(d => d.id)
  .domain(0, 100)
  .range(0, 200)
  .position(d => d.height, d => d.weight)
  .fill(d => (d.gender === 'm' ? 'blue' : 'orange'));
tickedPlot.update(data);

storiesOf('Scatter Plot', module)
  .add('basic construction', () => results.basic)
  .add('zoomed in', () => results.zoomed)
  .add('basic with ticks', () => results.ticks);
