class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === '' || t.length > s.length) return "";
        const map = new Map();
        for(let l of t) {
            map.set(l, (map.get(l) || 0) + 1);
        }
        const window = new Map()
        let l = 0, have = 0, resLen = Infinity, res = [-1,-1];
        for(let r = 0; r < s.length; r++) {
            window.set(s[r], (window.get(s[r]) || 0) + 1)
            if(map.has(s[r]) && map.get(s[r]) == window.get(s[r])) have++

            while(have === map.size) {
                if((r - l + 1) < resLen) {
                    res = [l ,r];
                    resLen = (r - l) + 1
                }

                window.set(s[l], window.get(s[l]) - 1);
                if(map.has(s[l]) && window.get(s[l]) < map.get(s[l])) have--;
                l++
            }
        }
        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
