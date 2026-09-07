class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort((a,b) => a - b);
        const res = [];
        const cur = [];

        const set = new Set();
        const dfs = (i) => {
            if(i >= nums.length) {
                res.push([...cur]);
                return;
            }

            const el = nums[i]
            cur.push(el);
            set.add(el);
            dfs(i + 1);

            while(el === nums[i]) i++;
            cur.pop();
            set.delete(el);
            dfs(i);
        }

        dfs(0);
        return res;
    }
}
