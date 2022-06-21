import { insert, mergeTwoArrays, mergeTwoLists } from './mergeTwoLists';

describe('insert', () => {
  // NOTE: npm run test - --watch filename
  it('should build a node list', async () => {
    const result = insert([1, 2, 4]);
    // [1, 1, 2, 3, 4, 4]
    // NOTE: toMatchObject를 배움.
    expect(result).toMatchObject({
      next: {
        next: {
          next: null,
          val: 4,
        },
        val: 2,
      },
      val: 1,
    });
  });
});


describe('mergeTwoLists', () => {
  // NOTE: npm run test - --watch filename
  it('should return the head of the merged linked list', async () => {
    const result = mergeTwoLists(insert([1, 2, 4]), insert([1, 3, 4]));
    // [1, 1, 2, 3, 4, 4]
    // NOTE: toMatchObject를 배움.
    expect(result).toMatchObject({
      next: {
        next: {
          next: { val: 3, next: { val: 4, next: { val: 4, next: null } } },
          val: 2,
        },
        val: 1,
      },
      val: 1,
    });
  });

  it('should a merged sorted array', async () => {
    const result = mergeTwoArrays([1, 2, 4], [1, 3, 4]);
    // [1, 1, 2, 3, 4, 4]
    // NOTE: toMatchObject를 배움.
    expect(result).toStrictEqual([1, 1, 2, 3, 4, 4]);
  });
});
