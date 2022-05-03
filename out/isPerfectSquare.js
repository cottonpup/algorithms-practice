"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPerfectSquare(num) {
    var start = 1;
    var end = num;
    while (start < end) {
        var mid = Math.floor(num / 2); // 8
        if (mid * mid === num * num) {
            return true;
        }
        if (mid * mid > num * num) {
            end = mid - 1;
        }
        if (mid * mid < num * num) {
            start = mid + 1;
        }
    }
    return false;
}
exports.default = isPerfectSquare;
//# sourceMappingURL=isPerfectSquare.js.map