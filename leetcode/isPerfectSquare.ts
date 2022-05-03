// Problem Source: https://leetcode.com/problems/valid-perfect-square/

export function isPerfectSquare(num: number): boolean {
  let start = 1;
  let end = num; // 16

  if (num * num === num) {
    return true;
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // 8
    if (mid * mid === num) {
      return true;
    }

    if (mid * mid > num) {
      // 64 > 8
      end = mid - 1; // 7
    }

    if (mid * mid < num) {
      start = mid + 1;
    }
  }
  return false;
}
