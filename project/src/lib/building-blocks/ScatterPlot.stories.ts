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

const lotsOfData: any[] = [];
for (let ctr = 0; ctr < 1000; ctr++) {
  lotsOfData.push({
    id: ctr,
    x: Math.random() * 100,
    y: Math.random() * 200,
  });
}

const smallThings = [1, 2, 3, 4, 5].map(v => {
  return {
    id: v,
    x: v * 0.001,
    y: 1 + v * 0.002,
  };
});

const smallAndBigThings = [1, 2, 3, 4, 5].map(v => {
  return {
    id: v,
    x: v * 0.0001,
    y: v * 1000,
  };
});

const bigAndSmallThings = [1, 2, 3, 4, 5].map(v => {
  return {
    id: v,
    x: v * 1000,
    y: v * 0.0001,
  };
});

const smallNegativeThings = [1, 2, 3, 4, 5].map(v => {
  return {
    id: v,
    x: -1 - v * 0.0001,
    y: 0 - v * 0.0001,
  };
});

const data = [fred, barney, ted, wilma, betty, alice, tina];

export const results: { [key: string]: HTMLElement } = {};
results.basic = createResizableDiv(50, 100, 200, 400, 300, 600);
results.zoomed = createResizableDiv(50, 100, 200, 400, 300, 600);
results.withTitles = createResizableDiv(50, 100, 200, 400, 300, 600);
results.seaborn = createResizableDiv(50, 100, 200, 400, 300, 600);
results.overrideEverything = createResizableDiv(50, 100, 200, 400, 300, 600);
results.smallThings = createResizableDiv(50, 100, 200, 400, 300, 600);
results.smallAndBigThings = createResizableDiv(50, 100, 200, 400, 300, 600);
results.bigAndSmallThings = createResizableDiv(100, 50, 400, 200, 600, 300);
results.smallNegativeThings = createResizableDiv(50, 100, 200, 400, 300, 600);
results.changing = createResizableDiv(50, 100, 200, 400, 300, 600);

const topDiv = document.createElement('div');
topDiv.style.width = '100px';
topDiv.style.height = '200px';
topDiv.style.border = 'black 1px solid';

const bottomDiv = document.createElement('div');
bottomDiv.style.width = '600px';
bottomDiv.style.height = '300px';
bottomDiv.style.border = 'black 1px solid';

results.stacked = document.createElement('div');
results.stacked.appendChild(topDiv);
results.stacked.appendChild(bottomDiv);

const topPlot = new ScatterPlot(topDiv)
  .id(d => d.id)
  .domain(4, 100)
  .range(0, 200)
  .xAxisLabel('Time')
  .yAxisLabel('Value')
  .plotTitle('No Aspect Ratio');

topPlot.update(data);
topPlot.position(d => d.height, d => d.weight);
topPlot.update(data);
topPlot.update(data);

const bottomPlot = new ScatterPlot(bottomDiv)
  .id(d => d.id)
  .domain(4, 100)
  .range(0, 200)
  .xAxisLabel('Time')
  .yAxisLabel('Value')
  .plotTitle('Aspect Ratio of 2')
  .aspectRatio(2);

bottomPlot.update(data);
bottomPlot.position(d => d.height, d => d.weight);
bottomPlot.update(data);
bottomPlot.update(data);

const basicPlot = new ScatterPlot(results.basic)
  .id(d => d.id)
  .domain(4, 100)
  .range(0, 200);

basicPlot.update(data);
basicPlot.position(d => d.height, d => d.weight);
basicPlot.update(data);
basicPlot.update(data);

new ScatterPlot(results.withTitles)
  .id(d => d.id)
  .domain(0, 100)
  .range(0, 200)
  .position(d => d.height, d => d.weight)
  .xAxisLabel('height (inches)')
  .yAxisLabel('weight (pounds)')
  .plotTitle('With Titles')
  .update(data);

new ScatterPlot(results.zoomed)
  .id(d => d.id)
  .domain(55, 75)
  .range(115, 160)
  .position(d => d.height, d => d.weight)
  .fill(d => (d.gender === 'm' ? 'blue' : 'orange'))
  .opacity(0.5)
  .radius(d => (d.gender === 'm' ? 3 : 5))
  .stroke(d => (d.gender === 'm' ? 'black' : 'blue'))
  .strokeWidth(0.5)
  .axisStrokeWidth(0.5)
  .xAxisLabel('height (inches)')
  .yAxisLabel('weight (pounds)')
  .plotTitle('Zoomed')
  .backgroundFill('lightgrey')
  .tickStroke('black')
  .update(data);

new ScatterPlot(results.seaborn)
  .id(d => d.id)
  .domain(0, 100)
  .range(0, 200)
  .position(d => d.height, d => d.weight)
  .backgroundFill('lightgrey')
  .axisStroke('none')
  .tickStrokeWidth(1)
  .tickStroke('white')
  .xAxisLabel('height (inches)')
  .yAxisLabel('weight (pounds)')
  .plotTitle('Seaborn')
  .update(data);

new ScatterPlot(results.overrideEverything)
  .id(d => d.id)
  .position(d => d.height, d => d.weight)
  .fill(d => (d.gender === 'm' ? 'blue' : 'orange'))
  .radius(5)
  .axisStroke('black')
  .axisStrokeWidth(0.5)
  .tickStrokeWidth(0.5)
  .tickStroke('white')
  .xTicks([31, 40, 62, 82])
  .yTicks([47, 71, 129, 155])
  .domain(0, 100)
  .range(0, 200)
  .xAxisLabel('height (inches)')
  .yAxisLabel('weight (pounds)')
  .domain(0, 100)
  .range(0, 200)
  .topMarginRatio(0.1)
  .rightMarginRatio(0)
  .bottomMarginRatio(0.1)
  .leftMarginRatio(0.23)
  .plotTitle('Override Everything')
  .backgroundFill('lightgrey')
  .tickStroke('black')
  .fontFamily('serif')
  .update(data);

new ScatterPlot(results.smallThings)
  .id(d => d.id)
  .position(d => d.x, d => d.y)
  .domain(0, 0.006)
  .range(1.001, 1.013)
  .aspectRatio(2)
  .stroke('none')
  .fill('black')
  .axisStroke('none')
  .xAxisLabel('X')
  .yAxisLabel('Y')
  .plotTitle('Small Things')
  .backgroundFill('lightgrey')
  .tickStroke('black')
  .update(smallThings);

new ScatterPlot(results.smallAndBigThings)
  .id(d => d.id)
  .position(d => d.x, d => d.y)
  .domain(0, 0.0006)
  .range(1000, 6000)
  .stroke('none')
  .fill('black')
  .axisStroke('none')
  .xAxisLabel('X')
  .yAxisLabel('Y')
  .plotTitle('Small and Big Things')
  .backgroundFill('lightgrey')
  .tickStroke('black')
  .update(smallAndBigThings);

new ScatterPlot(results.bigAndSmallThings)
  .id(d => d.id)
  .position(d => d.x, d => d.y)
  .domain(2000, 5000)
  .range(0, 0.0006)
  .stroke('none')
  .fill('black')
  .axisStroke('none')
  .xAxisLabel('X')
  .yAxisLabel('Y')
  .plotTitle('Big and Small Things')
  .backgroundFill('lightgrey')
  .tickStroke('black')
  .update(bigAndSmallThings);

new ScatterPlot(results.smallNegativeThings)
  .id(d => d.id)
  .position(d => d.x, d => d.y)
  .domain(-1.0006, -1)
  .range(-0.0006, 0)
  .stroke('none')
  .fill('black')
  .axisStroke('none')
  .xAxisLabel('X')
  .yAxisLabel('Y')
  .plotTitle('Small Negative Things')
  .backgroundFill('lightgrey')
  .tickStroke('black')
  .update(smallNegativeThings);

const changingPlot = new ScatterPlot(results.changing)
  .id(d => d.id)
  .domain(0, 100)
  .range(0, 200)
  .position(d => d.x, d => d.y)
  .radius(2)
  .tooltip((d: { id: string }) => 'Circle ' + d.id, [
    { label: 'x', valueProducer: (d: { x: number }) => '' + d.x },
    { label: 'y', valueProducer: (d: { y: number }) => '' + d.y },
  ]);

changingPlot.update(lotsOfData);

let clock = 0;
setInterval(() => {
  const xThreshold = clock % 100;

  const filtered = lotsOfData.filter(d => {
    return d.x > xThreshold;
  });

  changingPlot.update(filtered);
  clock++;
}, 33);

storiesOf('Scatter Plot', module)
  .add('basic construction', () => results.basic)
  .add('basic with titles', () => results.withTitles)
  .add('zoomed in', () => results.zoomed)
  .add('seaborn style', () => results.seaborn)
  .add('override everything', () => results.overrideEverything)
  .add('small things', () => results.smallThings)
  .add('small and big things', () => results.smallAndBigThings)
  .add('big and small things', () => results.bigAndSmallThings)
  .add('small negative things', () => results.smallNegativeThings)
  .add('changing', () => results.changing)
  .add('stacked', () => results.stacked);
