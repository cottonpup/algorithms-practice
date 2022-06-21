import { isValid } from './isValid';

describe('isValid', () => {
  it('should return true if open brackets are closed by the same type of brackets', async () => {
    const result = isValid('()');
    expect(result).toBe(true);
    const result1 = isValid('()[]{}');
    expect(result1).toBe(true);
  });
  it('should return false if open brackets are not closed by the same type of brackets', async () => {
    const result1 = isValid('(]');
    expect(result1).toBe(false);
    const result2 = isValid('([)]');
    expect(result2).toBe(false);
    const result3 = isValid('(){}}{');
    expect(result3).toBe(false);
  });
});
