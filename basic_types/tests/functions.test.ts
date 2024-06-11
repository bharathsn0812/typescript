import { describe, it, expect } from '@jest/globals';
import * as funcs from '../src/functions';

describe('Functions', () => {
  it('should add two numbers correctly', () => {
    expect(funcs.add(1, 2)).toBe(3);
  });

  it('should build name with default parameter', () => {
    expect(funcs.buildName("John")).toBe("John Smith");
  });
});
