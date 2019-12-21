import { storiesOf } from '@storybook/html';
import { SinaPlot } from './SinaPlot';
import { createResizableDiv } from '@wounded-pixels/svg-bindings';

const footballWeights = [
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  198,
  223,
  225,
  250,
  259,
  241,
  335,
  310,
  279,
  193,
  210,
  315,
  209,
  242,
  167,
  198,
  250,
  230,
  256,
  265,
  265,
  296,
  334,
  224,
  195,
  204,
  295,
  317,
  194,
  181,
  295,
  190,
  249,
  184,
  218,
  195,
  254,
  191,
  305,
  223,
  328,
  332,
  218,
  350,
  211,
  203,
  303,
  240,
  227,
  251,
  320,
  190,
  237,
];
const basketballWeights = [
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  190,
  240,
  204,
  186,
  180,
  270,
  200,
  253,
  237,
  215,
  234,
  265,
  250,
  221,
  270,
  180,
];
const laxWeights = [
  180,
  195,
  220,
  185,
  175,
  175,
  180,
  185,
  205,
  190,
  200,
  200,
  ,
  190,
  160,
  180,
  180,
  230,
  195,
  205,
  190,
  205,
  188,
  235,
  185,
  205,
  210,
  220,
  185,
  178,
];

const sports = [
  {
    name: 'football',
    color: 'red',
    weights: footballWeights,
  },
  {
    name: 'basketball',
    color: 'blue',
    weights: basketballWeights,
  },
  { name: 'LAX', color: 'green', weights: laxWeights },
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
