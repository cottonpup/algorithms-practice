// Problem Source: https://leetcode.com/problems/guess-number-higher-or-lower/submissions/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n: number): number {
  let start = 1;
  let end = n;

  while (start <= end) {
    let guessNumber = Math.floor((start + end) / 2);
    let pickupNumber = guess(guessNumber);

    if (pickupNumber === 0) {
      return guessNumber;
    }

    if (pickupNumber === 1) {
      start = guessNumber + 1;
    }

    if (pickupNumber === -1) {
      end = guessNumber - 1;
    }
  }
};
