class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        if(s.length <= 1) return true;
        
        let l = 0, r = s.length - 1;
        while(l <= r) {
            if(s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}
