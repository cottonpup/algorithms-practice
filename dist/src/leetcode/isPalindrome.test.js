"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPalindrome_1 = require("./isPalindrome");
describe('isPalindrome', () => {
    it('should return true if it is palindrome', async () => {
        const result = (0, isPalindrome_1.isPalindrome)(121);
        expect(result).toBe(true);
    });
    it('should return false if it is not palindrome', async () => {
        const result1 = (0, isPalindrome_1.isPalindrome)(-121);
        expect(result1).toBe(false);
        const result2 = (0, isPalindrome_1.isPalindrome)(10);
        expect(result2).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNQYWxpbmRyb21lLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGVldGNvZGUvaXNQYWxpbmRyb21lLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBOEM7QUFFOUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDNUIsRUFBRSxDQUFDLHdDQUF3QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3RELE1BQU0sTUFBTSxHQUFHLElBQUEsMkJBQVksRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzNELE1BQU0sT0FBTyxHQUFHLElBQUEsMkJBQVksRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsTUFBTSxPQUFPLEdBQUcsSUFBQSwyQkFBWSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9