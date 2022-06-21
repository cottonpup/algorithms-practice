"use strict";
// Problem Source: https://leetcode.com/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
function search(nums, target) {
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
exports.search = search;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xlZXRjb2RlL3NlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0RBQStEO0FBQy9EOzs7O0dBSUc7OztBQUVILFNBQWdCLE1BQU0sQ0FBQyxJQUFjLEVBQUUsTUFBYztJQUNuRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO0lBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSTtJQUUvQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELE9BQU8sS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUM3QywrQkFBK0I7UUFFL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkQsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDakI7UUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN4RCxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNmO1FBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQ3hCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7S0FDRjtJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDO0FBekJELHdCQXlCQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkcifQ==