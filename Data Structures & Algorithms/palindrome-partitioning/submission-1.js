class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const cur = [];

        const isValidPalindrom = (str) => {
            let l = 0;
            let r = str.length - 1;
            while(l < r) {
                if(str[l] !== str[r]) return false;
                l++;
                r--
            }
            return true;
        }

        const dfs = (i) => {
            if(i >= s.length) {
                res.push([...cur]);
                return
            };

            for(let j = i; j < s.length; j++) {
                const el = s.slice(i, j + 1);
                if(isValidPalindrom(el)) {
                    cur.push(el)
                    dfs(j + 1);
                    cur.pop();
                };
            }
        }
        dfs(0);
        return res;
    }
}
