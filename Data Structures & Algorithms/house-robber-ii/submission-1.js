class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const helper = (arr) => {
            let twoHousesAgo = 0;
            let oneHouseAgo = 0;
            for(let i = 0; i < arr.length; i++) {
                const temp = Math.max(arr[i] + twoHousesAgo, oneHouseAgo);
                twoHousesAgo = oneHouseAgo
                oneHouseAgo = temp;
            }
            return oneHouseAgo
        }

        return Math.max(nums[0],helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1, nums.length)))
    }
}
