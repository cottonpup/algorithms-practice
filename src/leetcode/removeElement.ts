// Problem resouce: https://leetcode.com/problems/remove-element/
export function removeElement(nums: number[], val: number): number {
  let finalResult = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[finalResult] = nums[i];
      finalResult++;
    }
  }

  return finalResult;
}
