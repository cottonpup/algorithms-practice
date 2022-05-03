"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMin = void 0;
function findMin(nums) {
    let start = 0;
    let end = nums.length - 1;
    // No rotation
    if (nums[end] > nums[0]) {
        return nums[0];
    }
    // One element
    if (end === 0) {
        return nums[0];
    }
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        // If mid element is greater than (mid + 1) element, then (mid + 1) is the smallest num
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid] < nums[start]) {
            return nums[mid];
        }
    }
    return -1;
}
exports.findMin = findMin;
// console.log(findMin([3, 4, 5, 1, 2])); // 1
// console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
// console.log(findMin([11, 13, 15, 17])); // 0
// console.log(findMin([3, 1, 2])); // 1
/**
 * [2, 3, {4}, 5, 1]
 *
 */
console.log(findMin([2, 3, 4, 5, 1])); // 1
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZE1pbk51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maW5kTWluTnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQWdCLE9BQU8sQ0FBQyxJQUFjO0lBQ3BDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRTFCLGNBQWM7SUFDZCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7SUFDRCxjQUFjO0lBQ2QsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1FBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7SUFFRCxPQUFPLEtBQUssSUFBSSxHQUFHLEVBQUU7UUFDbkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV4Qyx1RkFBdUY7UUFDdkYsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7S0FDRjtJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDO0FBMUJELDBCQTBCQztBQUVELDhDQUE4QztBQUM5QyxvREFBb0Q7QUFDcEQsK0NBQStDO0FBQy9DLHdDQUF3QztBQUV4Qzs7O0dBR0c7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJIn0=