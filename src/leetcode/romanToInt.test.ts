import { romanToInt } from './romanToInt';

describe('romanToInt', () => {
  it('should return convert it to an integer', async () => {
    // const result = romanToInt('III');
    // expect(result).toBe(3);
    // const result1 = romanToInt('LVIII');
    // expect(result1).toBe(58);
    const result2 = romanToInt('MCMXCIV'); // 2105
    expect(result2).toBe(1994);
    const result3 = romanToInt('LVIII'); // 2105
    expect(result3).toBe(58);
  });
});
