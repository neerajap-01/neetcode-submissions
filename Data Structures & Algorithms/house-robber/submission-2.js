class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let twoHouseAgo = 0;
        let oneHouseAgo = 0;

        for(let i = 0; i < nums.length; i++) {
            const temp = Math.max(nums[i] + twoHouseAgo, oneHouseAgo)
            twoHouseAgo = oneHouseAgo;
            oneHouseAgo = temp;
        }
        return oneHouseAgo;
    }
}
