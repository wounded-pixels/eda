import { calculateDefaultTicks } from './calculations';

test('calculateDefaultTicks large numbers', () => {
  expect(calculateDefaultTicks(576, 1533)).toMatchInlineSnapshot(`
                                            Array [
                                              800,
                                              1000,
                                              1200,
                                              1400,
                                            ]
                      `);

  expect(calculateDefaultTicks(-1800, 2200)).toMatchInlineSnapshot(`
    Array [
      -1000,
      0,
      1000,
      2000,
    ]
  `);

  expect(calculateDefaultTicks(-1, 12345)).toMatchInlineSnapshot(`
                                Array [
                                  4000,
                                  8000,
                                ]
                `);
});

test('calculateDefaultTicks small numbers', () => {
  expect(calculateDefaultTicks(0.0001, 0.00011)).toMatchInlineSnapshot(`
                            Array [
                              0.000102,
                              0.000104,
                              0.000106,
                              0.000108,
                            ]
              `);

  expect(calculateDefaultTicks(1.001, 1.013)).toMatchInlineSnapshot(`
                    Array [
                      1.004,
                      1.008,
                      1.012,
                    ]
          `);

  expect(calculateDefaultTicks(-0.001, 0.001)).toMatchInlineSnapshot(`
        Array [
          -0.0005,
          0,
          0.0005,
        ]
    `);
});
