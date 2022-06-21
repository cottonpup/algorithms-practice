"use strict";
// Problem Source: https://leetcode.com/problems/valid-perfect-square/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPerfectSquare = void 0;
function isPerfectSquare(num) {
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
exports.isPerfectSquare = isPerfectSquare;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNQZXJmZWN0U3F1YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xlZXRjb2RlL2lzUGVyZmVjdFNxdWFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0VBQXNFOzs7QUFFdEUsU0FBZ0IsZUFBZSxDQUFDLEdBQVc7SUFDekMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSztJQUVwQixJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxFQUFFO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLEtBQUssSUFBSSxHQUFHLEVBQUU7UUFDbkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDN0MsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUNuQixTQUFTO1lBQ1QsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3BCO1FBRUQsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUNuQixLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBeEJELDBDQXdCQyJ9