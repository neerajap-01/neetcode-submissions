class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const map = {};

      for(let word of strs) {
        const alphabets = new Array(26).fill(0);
        for(let char of word) {
          alphabets[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }

        if(map[alphabets]) {
          map[alphabets].push(word)
        } else {
          map[alphabets] = [word]
        }
      }

      return Object.values(map)
    }
}
