// Problem Source: https://leetcode.com/problems/palindrome-number/

// * More mathmatical access *
// You can solve it wihtout converting x to string
export function isPalindrome(x: number) {
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
