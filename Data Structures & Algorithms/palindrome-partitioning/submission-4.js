class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const cur = [];

        const isPalindrom = (str) => {
            let l = 0, r = str.length - 1;
            while(l < r) {
                if(str[l] !== str[r]) return false;
                l++
                r--
            }
            return true;
        }

        const dfs = (j) => {
            if(j >= s.length) {
                res.push([...cur]);
                return;
            }

            for(let i = j; i < s.length; i++) {
                const str = s.slice(j, i + 1);
                if(isPalindrom(str)) {
                    cur.push(str);
                    dfs(i + 1)
                    cur.pop();
                }
            }
        }
        dfs(0);
        return res;
    }
}
