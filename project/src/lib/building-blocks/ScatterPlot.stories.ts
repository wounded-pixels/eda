import { storiesOf } from "@storybook/html";
import { ScatterPlot } from "./ScatterPlot";

const fred = { id: 1, height: 72, weight: 222, gender: "m" };
const barney = { id: 2, height: 68, weight: 180, gender: "m" };
const wilma = { id: 3, height: 61, weight: 100, gender: "f" };
const betty = { id: 4, height: 63, weight: 120, gender: "f" };
const data = [fred, barney, wilma, betty];

storiesOf("Scatter Plot", module).add("basic construction", () => {
  const parentDiv = document.createElement("div");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100");
  svg.setAttribute("height", "100");

  const plot = new ScatterPlot(svg)
    .id(d => d.id)
    .domain(0, 100)
    .range(0, 300)
    .position(d => d.height, d => d.weight)
    .fill(d => (d.gender === "m" ? "blue" : "orange"));
  plot.update(data);

  parentDiv.appendChild(svg);
  return parentDiv;
});
