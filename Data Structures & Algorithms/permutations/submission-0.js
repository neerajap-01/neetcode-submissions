class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const set = new Set();
        const res = [];

        const cur = []
        const dfs = () => {
            if(cur.length === nums.length) {
                res.push([...cur])
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(set.has(nums[i])) continue;

                cur.push(nums[i]);
                set.add(nums[i]);
                dfs();

                cur.pop();
                set.delete(nums[i]);
            }
        }

        dfs();

        return res;
    }
}
