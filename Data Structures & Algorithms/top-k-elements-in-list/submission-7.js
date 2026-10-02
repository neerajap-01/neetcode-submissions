class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
        const arr = new Array(nums.length + 1);
        for(let [key,val] of map.entries()) {
            if(arr[val]) arr[val].push(key)
            else arr[val] = [key]
        }
        let j = arr.length - 1;
        const res  = []
        while(j >= 0) {
            while(arr[j] && arr[j].length && res.length != k) {
                res.push(arr[j].pop())
            }
            j--
        }
        return res;
    }
}
