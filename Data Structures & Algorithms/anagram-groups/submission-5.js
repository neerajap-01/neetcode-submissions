class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const map = {};
      for(let str of strs) {
        const arr = new Array(26).fill(0);
        for(let l of str) {
          arr[l.charCodeAt() - 'a'.charCodeAt()] = (arr[l.charCodeAt() - 'a'.charCodeAt()] || 0) + 1;
        }
        const key = arr.join('-');
        if(map[key]) {
          map[key].push(str)
        } else {
          map[key] = [str]
        }
      }
      return Object.values(map);
    }
}
