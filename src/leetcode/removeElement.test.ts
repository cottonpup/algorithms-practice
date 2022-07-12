import { removeElement } from './removeElement';

describe('removeElement', () => {
  it('should remove duplicates', async () => {
    const result1 = removeElement([3, 2, 2, 3], 3);
    expect(result1).toBe(2);
    const result2 = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
    expect(result2).toBe(5);
  });
});
