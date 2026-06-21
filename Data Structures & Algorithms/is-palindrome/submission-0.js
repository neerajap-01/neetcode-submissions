class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length <= 1) return true;

        const regexp = /[a-zA-Z0-9]+/g;

        const actualStr= [...s.matchAll(regexp)].join('').toLowerCase();

        let left = 0;
        let right = actualStr.length-1

        while (left < right) {
            if(actualStr[left] != actualStr[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
