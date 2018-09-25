import { multiply } from './multiply.js';

// test('multiplies 1 * 2 to equal 2', () => {
//   expect(multiply(1, 2)).toBe(2);
// });

describe('multiply', () => {
  it('returns the product of two numbers', () => {
    expect(multiply(1, 2)).toBe(2);
  })
});
