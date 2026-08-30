class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort((a,b) => a - b);
        const res = [];

        const cur = [];

        const dfs = (i) => {
            if(i >= nums.length) {
                res.push([...cur]);
                return
            }

            const el = nums[i]
            cur.push(el);
            dfs(i+1);

            while(el === nums[i]) i++;
            cur.pop();
            dfs(i);
        }

        dfs(0);

        return res;
    }
}
