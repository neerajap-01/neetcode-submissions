class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const myMap = {};

        for (let letter of s) {
            myMap[letter] = myMap[letter] ? myMap[letter] + 1 : 1;
        }

        for (let letter of t) {
            if (letter in myMap) {
                --myMap[letter]
                if (myMap[letter] < 0) return false;
            } else {
                return false;
            }
        }

        return true
    }
}
