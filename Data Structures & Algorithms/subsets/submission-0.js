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

            //Include the current val i.e nums[i]
            cur.push(nums[i])
            dfs(i + 1)

            //Don't include the current val
            cur.pop()
            dfs(i + 1)
        } 

        dfs(0)
        return res
    }
}
