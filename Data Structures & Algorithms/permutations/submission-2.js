class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const cur = [];

        const set = new Set();
        const dfs = () => {
            if(cur.length >= nums.length) {
                res.push([...cur]);
                return;
            }

            for(let j = 0; j < nums.length; j++){
                if(set.has(nums[j])) continue;

                cur.push(nums[j]);
                set.add(nums[j]);
                dfs();

                cur.pop();
                set.delete(nums[j])
            }
        }

        dfs();
        return res;
    }
}
