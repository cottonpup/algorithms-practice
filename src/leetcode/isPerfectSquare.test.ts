import { isPerfectSquare } from './isPerfectSquare';

describe('isPerfectSquare', () => {
  it('should return true if num is a perfect square', async () => {
    const result = isPerfectSquare(16);
    expect(result).toBe(true);
    const result1 = isPerfectSquare(1);
    expect(result1).toBe(true);
    const result2 = isPerfectSquare(104976);
    expect(result2).toBe(true);
  });
  it('should return false if num is not a perfect square', async () => {
    const result1 = isPerfectSquare(14);
    expect(result1).toBe(false);
  });
});
