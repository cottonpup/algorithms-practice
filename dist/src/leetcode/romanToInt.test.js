"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const romanToInt_1 = require("./romanToInt");
describe('romanToInt', () => {
    it('should return convert it to an integer', async () => {
        // const result = romanToInt('III');
        // expect(result).toBe(3);
        // const result1 = romanToInt('LVIII');
        // expect(result1).toBe(58);
        const result2 = (0, romanToInt_1.romanToInt)('MCMXCIV'); // 2105
        expect(result2).toBe(1994);
        const result3 = (0, romanToInt_1.romanToInt)('LVIII'); // 2105
        expect(result3).toBe(58);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9tYW5Ub0ludC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xlZXRjb2RlL3JvbWFuVG9JbnQudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUUxQyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLENBQUMsd0NBQXdDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDdEQsb0NBQW9DO1FBQ3BDLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsNEJBQTRCO1FBQzVCLE1BQU0sT0FBTyxHQUFHLElBQUEsdUJBQVUsRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU87UUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixNQUFNLE9BQU8sR0FBRyxJQUFBLHVCQUFVLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9