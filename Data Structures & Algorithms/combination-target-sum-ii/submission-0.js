class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates = candidates.sort((a,b) => a - b)
        const res = [];
        const cur = [];

        let sum = 0;
        const dfs = (i) => {
            if(sum === target) {
                res.push([...cur]);
                return;
            }

            if(i >= candidates.length || sum > target) return;

            const el = candidates[i]
            cur.push(el);
            sum += el;
            dfs(i+1);
            
            i++
            while(el === candidates[i]) i++
            cur.pop();
            sum -= el;
            dfs(i)
        }

        dfs(0);

        return res;
    }
}
