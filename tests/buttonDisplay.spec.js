/**
 * @jest-environment jsdom
 */
import {describe, expect} from '@jest/globals';
import { buttonDisplay } from '../src/index';

describe('#buttonDisplay', () => {
  it('should display the correct button text', () => {
    expect(buttonDisplay(true, 0)).toBe('START');
    expect(buttonDisplay(true, 1)).toBe('Continue');
    expect(buttonDisplay(false, 0)).toBe('Pause');
  })
})
