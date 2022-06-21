"use strict";
// Problem Source: https://leetcode.com/problems/roman-to-integer/
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanToInt = void 0;
// NOTE:
// 1. if(i + 1) 할 때 index를 넘어가면 오류를 던질거라고 생각했는데 그렇지 않았다.
// 2. hasMap에 접근할 때 s(string)값을 통해 접근할 수 있다는 걸 깜빡헀다.
// TODO
// Find out better solution
// Better Solution
function romanToInt(s) {
    const hashMap = {
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
        if (hashMap[num] < hashMap[s[i + 1]]) {
            total -= hashMap[num];
        }
        else {
            total += hashMap[num];
        }
    });
    return total;
}
exports.romanToInt = romanToInt;
// Naive Solution
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9tYW5Ub0ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sZWV0Y29kZS9yb21hblRvSW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrRUFBa0U7OztBQUVsRSxRQUFRO0FBQ1Isd0RBQXdEO0FBQ3hELG9EQUFvRDtBQUVwRCxPQUFPO0FBQ1AsMkJBQTJCO0FBRTNCLGtCQUFrQjtBQUNsQixTQUFnQixVQUFVLENBQUMsQ0FBUztJQUNsQyxNQUFNLE9BQU8sR0FBMkI7UUFDdEMsQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsRUFBRSxFQUFFO1FBQ0wsQ0FBQyxFQUFFLEVBQUU7UUFDTCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7S0FDUixDQUFDO0lBRUYsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDN0IsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQyxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUF0QkQsZ0NBc0JDO0FBRUQsaUJBQWlCO0FBQ2pCLGtEQUFrRDtBQUNsRCw2Q0FBNkM7QUFDN0MsWUFBWTtBQUNaLFlBQVk7QUFDWixhQUFhO0FBQ2IsYUFBYTtBQUNiLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZUFBZTtBQUNmLE9BQU87QUFFUCxtQkFBbUI7QUFDbkIsNEJBQTRCO0FBQzVCLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMsK0JBQStCO0FBQy9CLGVBQWU7QUFDZix5Q0FBeUM7QUFDekMsK0JBQStCO0FBQy9CLFFBQVE7QUFDUixrQ0FBa0M7QUFDbEMsTUFBTTtBQUVOLGtCQUFrQjtBQUNsQixJQUFJIn0=