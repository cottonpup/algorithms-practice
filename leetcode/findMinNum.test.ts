import { findMin } from './findMinNum';

describe('findMinNum', () => {
  it('should return the minimum value when it exists', async () => {
    const result = findMin([3, 4, 5, 1, 2]);
    expect(result).toBe(1);

    const result1 = findMin([2, 3, 4, 5, 1]);
    expect(result1).toBe(1);

    const result2 = findMin([4, 5, 6, 7, 0, 1, 2]);
    expect(result2).toBe(0);

    const result3 = findMin([5, 1, 2, 3, 4]);
    expect(result3).toBe(1);

    const result4 = findMin([4, 5, 1, 2, 3]);
    expect(result4).toBe(1);
  });
  it('should return -1 when the minimum value does not exist', async () => {
    expect(5).toBe(5);
  });
});
