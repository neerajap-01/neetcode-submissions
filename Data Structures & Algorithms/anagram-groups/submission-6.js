class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const map = {};
      for(let str of strs) {
        const sortedS = str.split('').sort().join('');
        if(!map[sortedS]) map[sortedS] = []
        map[sortedS].push(str)
      }
      return Object.values(map);
    }
}
