/**
 * From numbers of given an arr, remove duplicates but one of them.
 * The order of the elements in the array arr must be maintained.
 *
 * Source: https://programmers.co.kr/learn/courses/30/lessons/12906
 */
function removeDuplicatesFn(arr) {
  return arr.filter((item, i) => item !== arr[i + 1]);
}
