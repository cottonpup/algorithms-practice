// Problem Source: https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr: number[]): number {
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
