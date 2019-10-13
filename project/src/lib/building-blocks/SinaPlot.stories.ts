import { storiesOf } from '@storybook/html';
import { SinaPlot } from './SinaPlot';
import { createResizableDiv } from '@wounded-pixels/svg-bindings';

const footballWeights = [];
for (let ctr = 0; ctr < 10; ctr++) {
  footballWeights.push(180 + ctr * 2.2);
  footballWeights.push(195 + ctr * 3.1);
  footballWeights.push(215 + ctr * 4.4);
  footballWeights.push(260 + ctr * 5.1);
  footballWeights.push(280 + ctr * 4.7);
}

const basketballWeights = [];
for (let ctr = 0; ctr < 4; ctr++) {
  basketballWeights.push(180 + ctr * 2.1);
  basketballWeights.push(190 + ctr * 3.3);
  basketballWeights.push(200 + ctr * 2.1);
  basketballWeights.push(210 + ctr * 2.5);
  basketballWeights.push(220 + ctr * 2.1);
}

const laxWeights = [];
for (let ctr = 0; ctr < 6; ctr++) {
  laxWeights.push(160 + ctr * 3.3);
  laxWeights.push(170 + ctr * 1.1);
  laxWeights.push(180 + ctr * 1.1);
}

const sports = [
  {
    name: 'football',
    color: 'red',
    weights: footballWeights.concat(footballWeights).concat(footballWeights),
  },
  {
    name: 'basketball',
    color: 'blue',
    weights: basketballWeights.concat(basketballWeights),
  },
  { name: 'LAX', color: 'green', weights: laxWeights.concat(laxWeights) },
];

let idCtr = 0;
const data: any[] = [];
sports.forEach(sport => {
  const { weights, name, color } = sport;
  weights.forEach(weight => {
    data.push({
      id: idCtr++,
      sport: name,
      color,
      weight,
    });
  });
});

export const results: { [key: string]: HTMLElement } = {};
results.basic = createResizableDiv(200, 300, 400, 600, 600, 800);

const basic = new SinaPlot(results.basic, 'sport')
  .id(d => d.id)
  .value(d => d.weight)
  .fill(d => d.color)
  .plotTitle('Weight Distributions')
  .xAxisLabel('weight (lbs)')
  .domain(100, 300);

basic.update(data);
basic.domain(150, 330).update(data);

basic.update(data);

storiesOf('Sina Plot', module).add('basic construction', () => results.basic);
