// Peoblem Source: https://leetcode.com/problems/valid-parentheses/

export function isValid(s: string): boolean {
  // TODO: !(number) => number가 있으면 false, 없으면 true
  const hashTable: Record<string, string> = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const stack = [];

  for (const value of s) {
    if (hashTable[value]) {
      stack.push(hashTable[value]);
    } else {
      if (stack.pop() !== value) {
        return false;
      }
    }
  }

  return !stack.length;
}
