// Problem Source: https://leetcode.com/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

export function search(nums: number[], target: number): number {
  let start = 0; // 0
  let end = nums.length - 1; // 6

  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  while (start < end) {
    let mid = Math.floor((start + end) / 2); // 3
    // When mid is same with target

    if (nums[start] < nums[mid] && nums[target] < nums[mid]) {
      start = mid + 1;
    }

    if (nums[mid] > nums[target] && nums[end] > nums[target]) {
      end = mid - 1;
    }

    if (nums[mid] === target) {
      return mid;
    }
  }
  return -1;
}

/**
 * [(4, 5, 6, {7}, 0, 1, 2)] // 0
 * start: 0
 * end: 6
 * mid: 3
 *
 * if(start > end) Rotation O
 * else Rotation X
 *
 * if(start < mid && target < mid)
 * start = mid + 1;
 * => [4, 5, 6, 7,(0, {1}, 2)]
 * start: 4
 * end: 6
 * mid: 5
 * if(mid > target && end > target){
 *  end = mid - 1;
 * }
 *
 * [(4, 5, 6, {7}, 0, 1, 2)] // 3
 *
 * start: 0
 * end: 6
 * mid: 3
 *
 * if(start > end) Rotation O
 * else Rotation X
 */
