class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let char of strs) {
            const arr = new Array(26).fill('-');
            for(let c of char) {
                arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] = (arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] || 0) + 1;
            }
            const key = arr.join('');
            if(map.has(key)) map.get(key).push(char);
            else map.set(key, [char])
        }
        return Array.from(map.values())
    }
}
