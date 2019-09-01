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
results.withTicks = createResizableDiv();
results.seaborn = createResizableDiv();

const basicPlot = new ScatterPlot(results.basic)
  .id(d => d.id)
  .domain(0, 100)
  .range(0, 200)
  .xTicks([20, 40, 60, 80])
  .yTicks([40, 80, 120, 160]);

basicPlot.update(data);
basicPlot.position(d => d.height, d => d.weight);
basicPlot.update(data);
basicPlot.update(data);

const tickedPlot = new ScatterPlot(results.withTicks)
  .id(d => d.id)
  .domain(0, 100)
  .range(0, 200)
  .position(d => d.height, d => d.weight)
  .fill(d => (d.gender === 'm' ? 'blue' : 'orange'))
  .axisStroke('black')
  .axisStrokeWidth(3)
  .tickStroke('blue')
  .tickStrokeWidth(1)
  .xTicks([20, 40, 60, 80])
  .yTicks([40, 80, 120, 160]);

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
  .axisStrokeWidth(0.5)
  .xTicks([50, 60, 70, 80])
  .yTicks([120, 130, 140, 150]);

const seabornPlot = new ScatterPlot(results.seaborn)
  .id(d => d.id)
  .domain(0, 100)
  .range(0, 200)
  .position(d => d.height, d => d.weight)
  .fill(d => (d.gender === 'm' ? 'blue' : 'orange'))
  .backgroundFill('lightgrey')
  .axisStrokeWidth(2)
  .axisStroke('none')
  .tickStrokeWidth(1)
  .tickStroke('white')
  .xTicks([20, 40, 60, 80])
  .yTicks([40, 80, 120, 160]);

zoomedPlot.update(data);
tickedPlot.update(data);
seabornPlot.update(data);

storiesOf('Scatter Plot', module)
  .add('basic construction', () => results.basic)
  .add('zoomed in', () => results.zoomed)
  .add('basic with ticks', () => results.withTicks)
  .add('seaborn style', () => results.seaborn);
