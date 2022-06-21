"use strict";
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
var guessNumber = function (n) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3NOdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGVldGNvZGUvZ3Vlc3NOdW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBGQUEwRjtBQUUxRjs7Ozs7OztHQU9HO0FBRUg7OztHQUdHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFTO0lBQ25DLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUVaLE9BQU8sS0FBSyxJQUFJLEdBQUcsRUFBRTtRQUNuQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV0QyxJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxXQUFXLENBQUM7U0FDcEI7UUFFRCxJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDdEIsS0FBSyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN2QixHQUFHLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUN2QjtLQUNGO0FBQ0gsQ0FBQyxDQUFDIn0=