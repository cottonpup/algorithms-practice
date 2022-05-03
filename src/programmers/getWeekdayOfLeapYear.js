/**
 * Write a function that returns the weekday of 2016 which is a leap year
 *
 * Source: https://programmers.co.kr/learn/courses/30/lessons/12901
 */

function getWeekdayOfLeapYear(a, b) {
  return new Date(`2016-${a}-${b}`)
    .toLocaleString('en-us', { weekday: 'short' })
    .toUpperCase();
}
