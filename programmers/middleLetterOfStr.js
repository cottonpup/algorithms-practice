/**
 * Write a function that returns the middle letter of string
 * If the length of string is even, just return the middle two letters.
 *
 * Source: https://programmers.co.kr/learn/courses/30/lessons/12903
 */

function middleLetterOfStr(s) {
  const divisor = Math.ceil(s.length / 2);

  return s.length % 2 === 0
    ? s.slice(divisor - 1, divisor + 1)
    : s.slice(divisor - 1, divisor);
}
