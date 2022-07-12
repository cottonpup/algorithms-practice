import { removeDuplicates } from './removeDuplicates';

describe('removeDuplicates', () => {
  it('should remove duplicates', async () => {
    const result1 = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
    expect(result1).toBe(5);
    const result2 = removeDuplicates([0, 1, 1, 1, 2]);
    expect(result2).toBe(3);
  });
});
