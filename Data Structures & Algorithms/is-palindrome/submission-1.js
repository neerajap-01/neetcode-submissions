class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length <= 1) return true;
        s = s.toLowerCase().match(/[a-zA-Z0-9]+/g).join("");

        let l = 0;
        let r = s.length-1;

        while(l < r){
            if(s[l] != s[r]) return false
            l++
            r--
        }

        return true
    }
}
