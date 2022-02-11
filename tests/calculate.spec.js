/**
 * @jest-environment jsdom
 */

import { calculate } from '../src/index';

describe('#calculate', () => {
  it('logs sum of two numbers', () => {
    expect(calculate(2, 3)).toBe(5);
  });
})
