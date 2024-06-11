import { describe, it, expect } from '@jest/globals';
import * as inter from '../src/interfaces';

describe('Interfaces', () => {
  it('should print label correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    inter.printLabel({ label: 'Test Label' });
    expect(consoleSpy).toHaveBeenCalledWith('Test Label');
  });
});
