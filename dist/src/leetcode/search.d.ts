/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export declare function search(nums: number[], target: number): number;
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
