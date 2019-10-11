module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/lib/building-blocks/ScatterPlot.stories.ts',
    '<rootDir>/src/lib/building-blocks/DotPlot.stories.ts',
  ],
};
