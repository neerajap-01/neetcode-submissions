class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
      const res = [];
      const cur = [];

      const dfs = (j = 0) => {
        if(j === s.length) {
          res.push([...cur]);
          return;
        }

        for(let i = j; i < s.length; i++) {
          const str = s.slice(j, i + 1);
          if(this.isPalindrome(str)) {
            cur.push(str);
            dfs(i + 1);
            cur.pop()
          }
        }
      }
      dfs();
      return res;
    }

    isPalindrome(str) {
      let l = 0, r = str.length - 1;
      while(l < r) {
        if(str[l] !== str[r]) return false
        l++; r--;
      }
      return true;
    }
}
