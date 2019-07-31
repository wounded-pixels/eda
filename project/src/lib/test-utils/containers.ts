import { results } from '../building-blocks/ScatterPlot.stories';

export const createResizableDiv = (
  minWidth: number,
  minHeight: number,
  maxWidth: number,
  maxHeight: number
): HTMLElement => {
  const div = document.createElement('div');
  div.style.minWidth = `${minWidth}px`;
  div.style.minHeight = `${minHeight}px`;
  div.style.width = `${minWidth}px`;
  div.style.height = `${minHeight}px`;
  div.style.maxWidth = `${maxWidth}px`;
  div.style.maxHeight = `${maxHeight}px`;
  div.style.border = `1px solid black`;
  div.style.resize = `both`;
  div.style.overflow = `scroll`;

  return div;
};
