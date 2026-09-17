class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const total = nums.reduce((cum,cur) => cum + cur, 0);
        if(total % 2 !== 0) return false; //odd total is impossible to split equally

        const target = total / 2;
        let set = new Set([0]);

        for(let i = 0; i < nums.length; i++) {
            const nextSet = new Set(set);
            for(let subSetSum of set) {
                const newSum = subSetSum + nums[i];
                if(newSum === target) return true;
                nextSet.add(newSum)
            }
            set = nextSet;
        }
        return false;
    }
}
