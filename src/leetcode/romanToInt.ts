// Problem Source: https://leetcode.com/problems/roman-to-integer/

// NOTE:
// 1. if(i + 1) 할 때 index를 넘어가면 오류를 던질거라고 생각했는데 그렇지 않았다.
// 2. hasMap에 접근할 때 s(string)값을 통해 접근할 수 있다는 걸 깜빡헀다.

export function romanToInt(s: string): number {
  const hasMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  s.split('').forEach((num, i) => {
    if (hasMap[num] < hasMap[s[i + 1]]) {
      total -= hasMap[num];
    } else {
      total += hasMap[num];
    }
  });

  return total;
}

// export function romanToInt(s: string): number {
//   const hasMap: Record<string, number> = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let total = 0;
//   let previousNum = 1000;
//   for (let i = 0; i < s.length; i++) {
//     if (previousNum >= hasMap[s[i]]) {
//       total += hasMap[s[i]];
//     } else {
//       total = total - previousNum * 2;
//       total += hasMap[s[i]];
//     }
//     previousNum = hasMap[s[i]];
//   }

//   return total;
// }
