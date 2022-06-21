"use strict";
// Problem Source: https://leetcode.com/problems/two-sum/
// NOTE: Record type, hasOwnProperty method, Hashtable
const twoSum = (array, target) => {
    const hastable = {};
    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i];
        if (hastable.hasOwnProperty(complement)) {
            return [hastable[complement], i];
        }
        hastable[array[i]] = i;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdvU3VtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xlZXRjb2RlL3R3b1N1bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseURBQXlEO0FBQ3pELHNEQUFzRDtBQUV0RCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQWUsRUFBRSxNQUFjLEVBQUUsRUFBRTtJQUNqRCxNQUFNLFFBQVEsR0FBMkIsRUFBRSxDQUFDO0lBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUksVUFBVSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkMsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEM7UUFFRCxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMifQ==