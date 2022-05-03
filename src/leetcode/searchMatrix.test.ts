import { searchMatrix } from './searchMatrix';

describe('searchMatrix', () => {
  it('should return true when the target exists', async () => {
    const result = searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3,
    );
    expect(result).toBe(true);
  });
  it('should return false when the target does not exist', async () => {
    const result1 = searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      13,
    );
    expect(result1).toBe(false);
  });
});
