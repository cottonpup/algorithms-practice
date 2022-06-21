"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("./search");
describe('search', () => {
    it('should return the index of target when it exists', async () => {
        const result = (0, search_1.search)([4, 5, 6, 7, 0, 1, 2], 0);
        expect(result).toBe(4);
        // const result1 = search([4, 5, 6, 7, 0, 1, 2], 3);
        // expect(result1).toBe(-1);
    });
    it('should return -1 when it does not exist', async () => {
        const result1 = (0, search_1.search)([1], 0);
        expect(result1).toBe(-1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGVldGNvZGUvc2VhcmNoLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBa0M7QUFFbEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2hFLE1BQU0sTUFBTSxHQUFHLElBQUEsZUFBTSxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixvREFBb0Q7UUFDcEQsNEJBQTRCO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLHlDQUF5QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3ZELE1BQU0sT0FBTyxHQUFHLElBQUEsZUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==