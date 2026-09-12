class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const cur = [];

        const isPalindrom = (str) => {
            let l = 0;
            let r = str.length - 1;
            while(l < r) {
                if(str[l] !== str[r]) return false;
                l++
                r--
            }
            return true;
        }

        const dfs = (start) => {
            if(start >= s.length) {
                res.push([...cur])
                return;
            }

            for(let end = start; end < s.length; end++) {
                const str = s.slice(start, end + 1)
                if(isPalindrom(str)) {
                    cur.push(str);
                    dfs(end+1)
                    cur.pop()
                }
            }
        }

        dfs(0)

        return res;
    }
}
