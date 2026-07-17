class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        const hashMap = {};

        for(let i = 0; i < nums.length; i++) {
            let j = i+1;
            let k = nums.length-1;

            while(j < k) {
                const result = nums[i] + nums[j] + nums[k];
                if(result < 0) {
                    j++
                } else if(result > 0){
                    k--
                } else {
                    const questionKey = `${nums[i]}-${nums[j]}-${nums[k]}`
                    hashMap[questionKey] = [nums[i], nums[j], nums[k]]
                    k--
                }
            }
        }

        return Object.values(hashMap);
    }
}
