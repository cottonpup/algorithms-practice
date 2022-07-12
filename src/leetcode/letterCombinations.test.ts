import { letterCombinations } from './letterCombinations';

describe('letterCombinations', () => {
  it('should return all possible letter combinations that the number could represent', async () => {
    const result = letterCombinations('2');
    expect(result).toStrictEqual(['a', 'b', 'c']);
    const result1 = letterCombinations('23');
    expect(result1).toStrictEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
  });
});
