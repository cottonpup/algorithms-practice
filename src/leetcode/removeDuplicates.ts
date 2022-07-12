// Problem Source: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

export const removeDuplicates = function (nums: number[]): number {
  let expectedNum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[expectedNum]) {
      nums[++expectedNum] = nums[i];
    }
  }
  return ++expectedNum;
};
