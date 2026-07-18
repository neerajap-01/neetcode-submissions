class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = new Array(nums.length);
        const ans = [];
        const hashMap = new Map();

        for(let j = 0; j < nums.length; j++){
            hashMap.set(nums[j], (hashMap.get(nums[j]) || 0) + 1);
        }

        for(let [key,val] of hashMap){
            if(bucket[val]) {
                bucket[val].push(key)
            } else {
                bucket[val] = [key]
            } 
        }

        for(let i = bucket.length-1; i >= 0; i--){
            while(bucket[i] && bucket[i].length && ans.length != k) {
                ans.push(bucket[i].pop())
            }
        }
        
        return ans;
    }
}
