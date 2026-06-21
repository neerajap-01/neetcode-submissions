class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const myMap1 = {};
        const myMap2 = {};

        for (let letter of s) {
            myMap1[letter] = myMap1[letter] ? myMap1[letter] + 1 : 1;
        }

        for (let letter of t) {
            myMap2[letter] = myMap2[letter] ? myMap2[letter] + 1 : 1;
        }

        for (let key in myMap1) {
            if (key in myMap2 && myMap1[key] == myMap2[key]) {
                delete myMap1[key]
                delete myMap2[key]
            } else {
                return false;
            }
        }

        return Object.keys(myMap1).length == 0 && Object.keys(myMap2).length == 0
    }
}
