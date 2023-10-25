/**
 * Return corresponding bits on each pairs of given array that take equal length of given n.
 *
 * Source: https://programmers.co.kr/learn/courses/30/lessons/17681
 */

function solution(n, arr1, arr2) {
  return arr1.map((ele, i) => {
    let sum = (ele | arr2[i]).toString(2);
    return ' '.repeat(n - sum.length) + sum.replace(/1/g, '#').replace(/0/g, ' ');
  });
}
