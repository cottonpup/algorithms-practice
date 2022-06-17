import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
  it('should return true if it is palindrome', async () => {
    const result = isPalindrome(121);
    expect(result).toBe(true);
  });
  it('should return false if it is not palindrome', async () => {
    const result1 = isPalindrome(-121);
    expect(result1).toBe(false);
    const result2 = isPalindrome(10);
    expect(result2).toBe(false);
  });
});
