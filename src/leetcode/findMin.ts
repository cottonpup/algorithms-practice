// Problem Source: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

function findMin(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1; // 4

  // No rotation
  if (nums[end] > nums[0]) {
    return nums[0];
  }
  // One element
  if (end === 0) {
    return nums[0];
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // 2

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    if (nums[mid] < nums[mid + 1] && nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }

    if (nums[mid] < nums[start]) {
      end = mid - 1;
    }

    if (nums[start] < nums[mid]) {
      start = mid + 1;
    }
  }
  return -1;
}
