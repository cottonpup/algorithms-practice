"use strict";
// Problem Source: https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            start = mid + 1;
        }
        if (nums[mid] > target) {
            end = mid - 1;
        }
    }
    return start;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoSW5zZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xlZXRjb2RlL3NlYXJjaEluc2VydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0VBQXdFO0FBRXhFOzs7O0dBSUc7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLElBQWMsRUFBRSxNQUFjO0lBQ3pELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRTFCLE9BQU8sS0FBSyxJQUFJLEdBQUcsRUFBRTtRQUNuQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUN4QixPQUFPLEdBQUcsQ0FBQztTQUNaO1FBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFO1lBQ3RCLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDIn0=