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
            if(cur.length === nums.length) {
                res.push([...cur]);
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(set.has(nums[i])) continue;

                const el = nums[i]
                cur.push(el);
                set.add(el);
                dfs();

                cur.pop();
                set.delete(el);
            }
        }

        dfs();

        return res;
    }
}
