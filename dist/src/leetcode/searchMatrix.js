"use strict";
// Problem Source: https://leetcode.com/problems/search-a-2d-matrix/
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMatrix = void 0;
function searchMatrix(matrix, target) {
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
        }
        else {
            high = mid - 1;
        }
    }
    return false;
}
exports.searchMatrix = searchMatrix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoTWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xlZXRjb2RlL3NlYXJjaE1hdHJpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQW9FOzs7QUFFcEUsU0FBZ0IsWUFBWSxDQUFDLE1BQWtCLEVBQUUsTUFBYztJQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSTtJQUMzQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSTtJQUU5QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVyQixPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRWxELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUNuRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsZUFBZTtRQUNmLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRTtZQUNqRCxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDTCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNoQjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBdEJELG9DQXNCQyJ9