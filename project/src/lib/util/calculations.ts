export const calculateDefaultTicks = (
  minimum: number,
  maximum: number
): number[] => {
  const minimumWhitespaceRatio = 0.15;
  const goalTicks = 5;
  const minimumTicks = 3;

  const span = maximum - minimum;
  const rawStep = span / goalTicks;

  const scale = Math.round(Math.log10(rawStep));
  let step = Math.pow(10, scale);
  while (span / step > goalTicks) {
    step *= 2;
  }

  while (span / step < minimumTicks) {
    step /= 2;
  }

  let start = Math.round(minimum / step) * step;
  let multiplier = 1;
  if (Math.abs(step) < 1) {
    multiplier = Math.pow(10, Math.abs(scale) + 1);
    start = Math.round(start * multiplier) / multiplier;
  }
  const stop = Math.round(maximum / step) * step;

  const ticks = [];
  const tickStart =
    (start - minimum) / step > minimumWhitespaceRatio ? start : start + step;
  const tickStop =
    (maximum - stop) / step > minimumWhitespaceRatio ? stop : stop - step;
  for (let tick = tickStart; tick <= tickStop; tick += step) {
    ticks.push(Math.round(tick * multiplier) / multiplier);
  }
  return ticks;
};
