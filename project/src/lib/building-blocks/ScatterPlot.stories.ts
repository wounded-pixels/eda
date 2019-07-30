import { storiesOf } from '@storybook/html';
import { ScatterPlot } from './ScatterPlot';

const fred = { id: 1, height: 65, weight: 150, gender: 'm' };
const barney = { id: 2, height: 70, weight: 155, gender: 'm' };
const ted = { id: 3, height: 75, weight: 160, gender: 'm' };

const wilma = { id: 11, height: 50, weight: 100, gender: 'f' };
const betty = { id: 12, height: 55, weight: 110, gender: 'f' };
const alice = { id: 13, height: 60, weight: 115, gender: 'f' };
const tina = { id: 14, height: 65, weight: 120, gender: 'f' };

const data = [fred, barney, ted, wilma, betty, alice, tina];

export const results: any = {};

results.basic = document.createElement('div');
results.basic.style.width = '200px';
results.basic.style.height = '400px';
results.basic.style.border = '1px solid black';

const basicPlot = new ScatterPlot(results.basic)
  .id(d => d.id)
  .domain(0, 100)
  .range(0, 100)
  .fill(d => (d.gender === 'm' ? 'blue' : 'orange'));
basicPlot.update(data);
basicPlot.range(0, 200).position(d => d.height, d => d.weight);
basicPlot.update(data);
basicPlot.update(data);

results.zoomed = document.createElement('div');
results.zoomed.style.width = '250px';
results.zoomed.style.height = '600px';
results.zoomed.style.border = '1px solid black';

const zoomedPlot = new ScatterPlot(results.zoomed)
  .id(d => d.id)
  .domain(50, 75)
  .range(100, 160)
  .position(d => d.height, d => d.weight)
  .fill(d => (d.gender === 'm' ? 'blue' : 'orange'));
zoomedPlot.update(data);

storiesOf('Scatter Plot', module)
  .add('basic construction', () => results.basic)
  .add('zoomed in', () => results.zoomed);
