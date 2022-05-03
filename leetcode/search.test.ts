import { search } from './search';

describe('search', () => {
  it('should return the index of target when it exists', async () => {
    const result = search([4, 5, 6, 7, 0, 1, 2], 0);
    expect(result).toBe(4);
    // const result1 = search([4, 5, 6, 7, 0, 1, 2], 3);
    // expect(result1).toBe(-1);
  });
  it('should return -1 when it does not exist', async () => {
    const result1 = search([1], 0);
    expect(result1).toBe(-1);
  });
});
