import { describe, it, expect } from '@jest/globals';
import * as basic from '../src/basic-types';

describe('Basic Types', () => {
  it('should declare boolean correctly', () => {
    expect(typeof basic.isDone).toBe('boolean');
  });

  it('should declare number correctly', () => {
    expect(typeof basic.decimal).toBe('number');
  });

  it('should declare string correctly', () => {
    expect(typeof basic.color).toBe('string');
  });
});
