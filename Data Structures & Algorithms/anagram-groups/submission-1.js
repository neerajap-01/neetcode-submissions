class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};

        for(let word of strs) {
            const countChar = new Array(26).fill(0);

            for(let char of word) {
                countChar[char.charCodeAt(0) - 'a'.charCodeAt(0)] = (countChar[char.charCodeAt(0) - 'a'.charCodeAt(0)] || 0) + 1  
            }

            if(hashMap[countChar]) {
                hashMap[countChar].push(word)
            } else {
                hashMap[countChar] = [word]
            }
        } 

        return Object.values(hashMap)
    }
}
