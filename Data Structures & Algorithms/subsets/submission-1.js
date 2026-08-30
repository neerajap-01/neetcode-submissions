class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        const cur = [];
        const dfs = (i) => {
            if(i >= nums.length) {
                res.push([...cur]);
                return;
            }

            cur.push(nums[i]);
            dfs(i+1);

            cur.pop();
            dfs(i+1);
        }

        dfs(0);

        return res;
    }
}
