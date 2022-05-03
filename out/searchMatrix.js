"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMatrix = void 0;
function searchMatrix(matrix, target) {
    var n = matrix.length; // 4
    var m = matrix[0].length; // 4
    var low = 0;
    var high = n * m - 1;
    while (low <= high) {
        var mid = Math.floor(low + (high - low) / 2); // 7
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
//# sourceMappingURL=searchMatrix.js.map