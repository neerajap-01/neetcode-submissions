class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const cur = [];
        let sum = 0;

        const dfs = (i) => {
            if(i >= nums.length || sum > target) return;

            if(sum == target) {
                res.push([...cur]);
                return;
            }

            sum += nums[i];
            cur.push(nums[i]);
            dfs(i);

            sum -= nums[i];
            cur.pop();
            dfs(i + 1);
        }

        dfs(0);

        return res;
    }
}
