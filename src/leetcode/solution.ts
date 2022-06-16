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
var solution = function (isBadVersion: (arg0: number) => boolean) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n: number) {
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
