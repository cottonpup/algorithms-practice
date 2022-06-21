import { longestCommonPrefix } from './longestCommonPrefix';

describe('longestCommonPrefix', () => {
  it('should return the longest common prefixs when it exits amongst an array of strings.', async () => {
    const result = longestCommonPrefix(['flower', 'flow', 'flight']);
    expect(result).toBe('fl');
  });
  it('should return empty string when it does not exits amongst an array of strings.', async () => {
    const result = longestCommonPrefix(['dog', 'racecar', 'car']);
    expect(result).toBe('');
  });
});

