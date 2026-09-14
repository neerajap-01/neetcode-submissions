class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let twoHousesAgo = 0;
        let oneHouseAgo = 0;

        for(let i = 0; i < nums.length; i++) {
            const curHouse = Math.max(nums[i] + twoHousesAgo, oneHouseAgo);
            twoHousesAgo = oneHouseAgo;
            oneHouseAgo = curHouse
        }
        return oneHouseAgo;
    }
}
