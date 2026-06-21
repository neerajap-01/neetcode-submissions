class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set();

        for (let num of nums) {
            if(mySet.has(num)) return true;

            mySet.add(num);
        }

        return false;
    }
}
