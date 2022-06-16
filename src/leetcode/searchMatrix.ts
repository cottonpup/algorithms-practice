// Problem Source: https://leetcode.com/problems/search-a-2d-matrix/

export function searchMatrix(matrix: number[][], target: number): boolean {
  let n = matrix.length; // 4
  let m = matrix[0].length; // 4

  let low = 0;
  let high = n * m - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2); // 7

    if (matrix[Math.floor(mid / m)][mid % m] === target) {
      return true;
    }

    // matrix[1][3]
    if (matrix[Math.floor(mid / m)][mid % m] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}
