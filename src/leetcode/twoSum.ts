// Problem Source: https://leetcode.com/problems/two-sum/
// NOTE: Record type, hasOwnProperty method, Hashtable

const twoSum = (array: number[], target: number) => {
  const hastable: Record<number, number> = {};
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];

    if (hastable.hasOwnProperty(complement)) {
      return [hastable[complement], i];
    }

    hastable[array[i]] = i;
  }

  return null;
};
