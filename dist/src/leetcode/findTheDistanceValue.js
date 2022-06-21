"use strict";
// Problem Source: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/#:~:text=Find%20the%20Distance%20Value%20Between%20Two%20Arrays%20%2D%20LeetCode&text=Given%20two%20integer%20arrays%20arr1,%5Bj%5D%7C%20%3C%3D%20d%20.
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTheDistanceValue = void 0;
function findTheDistanceValue(targets, arr, distance) {
    arr.sort();
    let amount = 0;
    // O(n)
    for (const target of targets) {
        let isConditionMet = true;
        let start = 0;
        let end = arr.length - 1;
        // O(log(n))
        // While there are 3 or more elements
        while (end - start > 1) {
            const midIndex = Math.floor((start + end) / 2);
            const mid = arr[midIndex];
            if (Math.abs(target - mid) <= distance) {
                isConditionMet = false;
                break;
            }
            if (mid < target) {
                start = midIndex + 1;
            }
            if (target < mid) {
                end = midIndex - 1;
            }
        }
        // When there are 1 or 2 elements
        if (end - start <= 1) {
            arr.forEach((element) => {
                if (Math.abs(target - element) <= distance) {
                    isConditionMet = false;
                }
            });
        }
        if (isConditionMet) {
            amount++;
        }
    }
    return amount;
}
exports.findTheDistanceValue = findTheDistanceValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZFRoZURpc3RhbmNlVmFsdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGVldGNvZGUvZmluZFRoZURpc3RhbmNlVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1QQUFtUDs7O0FBRW5QLFNBQWdCLG9CQUFvQixDQUNsQyxPQUFpQixFQUNqQixHQUFhLEVBQ2IsUUFBZ0I7SUFFaEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1gsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRWYsT0FBTztJQUNQLEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1FBQzVCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUV6QixZQUFZO1FBQ1oscUNBQXFDO1FBQ3JDLE9BQU8sR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3RDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLE1BQU07YUFDUDtZQUVELElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRTtnQkFDaEIsS0FBSyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7YUFDdEI7WUFFRCxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0Y7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNwQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFO29CQUMxQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2lCQUN4QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLGNBQWMsRUFBRTtZQUNsQixNQUFNLEVBQUUsQ0FBQztTQUNWO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBaERELG9EQWdEQyJ9