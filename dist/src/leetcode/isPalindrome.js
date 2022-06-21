"use strict";
// Problem Source: https://leetcode.com/problems/palindrome-number/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
// * More mathmatical access *
// You can solve it wihtout converting x to string
function isPalindrome(x) {
    // x = 121
    if (x < 0) {
        return false;
    }
    let reverse = 0;
    for (let i = x; i >= 1; i = Math.floor(i / 10)) {
        reverse = reverse * 10 + (i % 10);
    }
    return reverse === x;
}
exports.isPalindrome = isPalindrome;
// * Better Solution than the first solution *
// export function isPalindrome(x: number) {
//   if (x < 0) {
//     return false;
//   }
//   if (x.toString() === x.toString().split('').reverse().join('')) {
//     return true;
//   } else {
//     return false;
//   }
// }
// * Naive Solution *
// export function isPalindrome(x: number) {
//   if (x < 0) {
//     return false;
//   }
//   const mid = Math.ceil(x.toString().length / 2);
//   const begin = x.toString().slice(0, mid);
//   const endReversed =
//     x.toString().length % 2 !== 0
//       ? x
//           .toString()
//           .slice(mid - 1)
//           .split('')
//           .reverse()
//           .join('')
//       : x.toString().slice(mid).split('').reverse().join('');
//   if (begin === endReversed) {
//     return true;
//   } else {
//     return false;
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNQYWxpbmRyb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xlZXRjb2RlL2lzUGFsaW5kcm9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUVBQW1FOzs7QUFFbkUsOEJBQThCO0FBQzlCLGtEQUFrRDtBQUNsRCxTQUFnQixZQUFZLENBQUMsQ0FBUztJQUNwQyxVQUFVO0lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztJQUVoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtRQUM5QyxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUNuQztJQUNELE9BQU8sT0FBTyxLQUFLLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBWkQsb0NBWUM7QUFFRCw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsTUFBTTtBQUVOLHNFQUFzRTtBQUN0RSxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQixNQUFNO0FBQ04sSUFBSTtBQUVKLHFCQUFxQjtBQUNyQiw0Q0FBNEM7QUFDNUMsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixNQUFNO0FBQ04sb0RBQW9EO0FBRXBELDhDQUE4QztBQUM5Qyx3QkFBd0I7QUFDeEIsb0NBQW9DO0FBQ3BDLFlBQVk7QUFDWix3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLGdFQUFnRTtBQUVoRSxpQ0FBaUM7QUFDakMsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsTUFBTTtBQUNOLElBQUkifQ==