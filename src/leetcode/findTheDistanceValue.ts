// Problem Source: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/#:~:text=Find%20the%20Distance%20Value%20Between%20Two%20Arrays%20%2D%20LeetCode&text=Given%20two%20integer%20arrays%20arr1,%5Bj%5D%7C%20%3C%3D%20d%20.

export function findTheDistanceValue(
  targets: number[],
  arr: number[],
  distance: number,
): number {
  arr.sort();
  let amount = 0;

  // O(n)
  for (const target of targets) {
    let isConditionMet = true;

    let start = 0;
    let end = arr.length - 1;

    // O(log(n))
    // While there are 3 or more elements
    while (end - start > 1) {
      const midIndex = Math.floor((start + end) / 2);
      const mid = arr[midIndex];
      if (Math.abs(target - mid) <= distance) {
        isConditionMet = false;
        break;
      }

      if (mid < target) {
        start = midIndex + 1;
      }

      if (target < mid) {
        end = midIndex - 1;
      }
    }

    // When there are 1 or 2 elements
    if (end - start <= 1) {
      arr.forEach((element) => {
        if (Math.abs(target - element) <= distance) {
          isConditionMet = false;
        }
      });
    }

    if (isConditionMet) {
      amount++;
    }
  }
  return amount;
}
