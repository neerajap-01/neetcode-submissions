class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = new Map();
        const bucket = new Array(nums.length);
        const ans = [];

        for(let i = 0; i < nums.length; i++) {
            hashMap.set(nums[i], ((hashMap.get(nums[i]) || 0) + 1))
        }

        for(let [key, val] of hashMap) {
            if(bucket[val]) {
                bucket[val].push(key)
            } else {
                bucket[val] = [key]
            }
        }
        let j = bucket.length-1;
        while(ans.length != k){
            while(bucket[j] && bucket[j].length != 0 && ans.length != k) {
                ans.push(bucket[j].pop())
            }
            j--;
        }

        return ans;

    }
}
