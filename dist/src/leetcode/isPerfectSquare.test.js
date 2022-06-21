"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPerfectSquare_1 = require("./isPerfectSquare");
describe('isPerfectSquare', () => {
    it('should return true if num is a perfect square', async () => {
        const result = (0, isPerfectSquare_1.isPerfectSquare)(16);
        expect(result).toBe(true);
        const result1 = (0, isPerfectSquare_1.isPerfectSquare)(1);
        expect(result1).toBe(true);
        const result2 = (0, isPerfectSquare_1.isPerfectSquare)(104976);
        expect(result2).toBe(true);
    });
    it('should return false if num is not a perfect square', async () => {
        const result1 = (0, isPerfectSquare_1.isPerfectSquare)(14);
        expect(result1).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNQZXJmZWN0U3F1YXJlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGVldGNvZGUvaXNQZXJmZWN0U3F1YXJlLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBb0Q7QUFFcEQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixFQUFFLENBQUMsK0NBQStDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDN0QsTUFBTSxNQUFNLEdBQUcsSUFBQSxpQ0FBZSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBQSxpQ0FBZSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsTUFBTSxPQUFPLEdBQUcsSUFBQSxpQ0FBZSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsb0RBQW9ELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbEUsTUFBTSxPQUFPLEdBQUcsSUFBQSxpQ0FBZSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9