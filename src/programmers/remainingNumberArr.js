/**
 * Write a function that returns an array in which the values divisible by the divisor.
 * And sort the array in ascending order.
 * otherwise it returns -1 in an array.
 *
 * Source: https://programmers.co.kr/learn/courses/30/lessons/12910
 */

function remainingNumberArr(arr, divisor) {
  const filterdArr = arr.filter((item) => item % divisor === 0).sort((a, b) => a - b);

  return filterdArr.length ? filterdArr : [-1];
}
