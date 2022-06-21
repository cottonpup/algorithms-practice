"use strict";
// Problem Source: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMin = void 0;
function findMin(nums) {
    console.log('halllooo');
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
exports.findMin = findMin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZE1pbk51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sZWV0Y29kZS9maW5kTWluTnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzRkFBc0Y7OztBQUV0RixTQUFnQixPQUFPLENBQUMsSUFBYztJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSTtJQUUvQixjQUFjO0lBQ2QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QsY0FBYztJQUNkLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNiLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxLQUFLLElBQUksR0FBRyxFQUFFO1FBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRTdDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMxRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNmO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO0tBQ0Y7SUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ1osQ0FBQztBQWxDRCwwQkFrQ0MifQ==