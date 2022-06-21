"use strict";
// Problem Source: https://leetcode.com/problems/peak-index-in-a-mountain-array/
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // 4
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        if (arr[mid] < arr[mid - 1]) {
            end = mid - 1;
        }
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        }
    }
    return -1;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVha0luZGV4SW5Nb3VudGFpbkFycmF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xlZXRjb2RlL3BlYWtJbmRleEluTW91bnRhaW5BcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0ZBQWdGO0FBRWhGOzs7R0FHRztBQUNILElBQUksd0JBQXdCLEdBQUcsVUFBVSxHQUFhO0lBQ3BELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sS0FBSyxJQUFJLEdBQUcsRUFBRTtRQUNuQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUM3QyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzNCLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMzQixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNmO1FBRUQsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN0RCxPQUFPLEdBQUcsQ0FBQztTQUNaO0tBQ0Y7SUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDIn0=