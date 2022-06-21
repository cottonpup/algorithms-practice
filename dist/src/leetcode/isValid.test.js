"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValid_1 = require("./isValid");
describe('isValid', () => {
    it('should return true if open brackets are closed by the same type of brackets', async () => {
        const result = (0, isValid_1.isValid)('()');
        expect(result).toBe(true);
        const result1 = (0, isValid_1.isValid)('()[]{}');
        expect(result1).toBe(true);
    });
    it('should return false if open brackets are not closed by the same type of brackets', async () => {
        const result1 = (0, isValid_1.isValid)('(]');
        expect(result1).toBe(false);
        const result2 = (0, isValid_1.isValid)('([)]');
        expect(result2).toBe(false);
        const result3 = (0, isValid_1.isValid)('(){}}{');
        expect(result3).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xlZXRjb2RlL2lzVmFsaWQudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFvQztBQUVwQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLENBQUMsNkVBQTZFLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDM0YsTUFBTSxNQUFNLEdBQUcsSUFBQSxpQkFBTyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBQSxpQkFBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsa0ZBQWtGLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDaEcsTUFBTSxPQUFPLEdBQUcsSUFBQSxpQkFBTyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsTUFBTSxPQUFPLEdBQUcsSUFBQSxpQkFBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsTUFBTSxPQUFPLEdBQUcsSUFBQSxpQkFBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9