export function letterCombinations(digits: string): string[] {
  const digitToLetters: Record<string, string[]> = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let combinations: string[] = [];

  for (const digit of digits) {
    const letters = digitToLetters[digit];
    if (combinations.length === 0) {
      combinations = letters;
      continue;
    }

    const newCombinations: string[] = [];
    combinations.forEach((combination) => {
      letters.forEach((char) => {
        newCombinations.push(combination + char);
      });
    });
    combinations = newCombinations;
  }

  return combinations;
}
