"use strict";
// Problem Source: https://leetcode.com/problems/first-bad-version/
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let start = 1;
        let end = n;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            // check if mid is false
            if (!isBadVersion(mid)) {
                start = mid + 1;
            }
            if (isBadVersion(mid) && isBadVersion(mid - 1)) {
                end = mid - 1;
            }
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
                return mid;
            }
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sdXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGVldGNvZGUvc29sdXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1FQUFtRTtBQUVuRTs7Ozs7Ozs7R0FRRztBQUVIOzs7R0FHRztBQUNILElBQUksUUFBUSxHQUFHLFVBQVUsWUFBdUM7SUFDOUQ7OztPQUdHO0lBRUgsT0FBTyxVQUFVLENBQVM7UUFDeEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVosT0FBTyxLQUFLLElBQUksR0FBRyxFQUFFO1lBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDOUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDZjtZQUNELElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsT0FBTyxHQUFHLENBQUM7YUFDWjtTQUNGO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIn0=