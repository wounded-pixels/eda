import { storiesOf } from '@storybook/html';
import { DotPlot } from './DotPlot';
import { createResizableDiv } from '@wounded-pixels/svg-bindings';

const fred = { id: 1, name: 'Fred', height: 65, weight: 150, gender: 'm' };
const barney = { id: 2, name: 'Barney', height: 70, weight: 155, gender: 'm' };
const ted = { id: 3, name: 'Ted', height: 75, weight: 160, gender: 'm' };

const wilma = { id: 11, name: 'Wilma', height: 50, weight: 100, gender: 'f' };
const betty = { id: 12, name: 'Betty', height: 55, weight: 110, gender: 'f' };
const alice = { id: 13, name: 'Alice', height: 60, weight: 115, gender: 'f' };
const tina = { id: 14, name: 'Tina', height: 65, weight: 120, gender: 'f' };

const data = [fred, barney, ted, wilma, betty, alice, tina];

export const results: any = {};
results.basic = createResizableDiv(50, 100, 200, 400, 300, 600);

new DotPlot(results.basic)
  .id(d => d.id)
  .domain(4, 100)
  .value(d => d.height)
  .label(d => d.name)
  .update(data);

storiesOf('Dot Plot', module).add('basic construction', () => results.basic);
