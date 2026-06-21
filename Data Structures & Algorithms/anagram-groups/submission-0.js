class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashmap = {};

        strs.map(str => {
            let count = new Array(26).fill(0);

            for(let i in str) {
                count[str.charCodeAt(i) - 'a'.charCodeAt(0)] = (count[str.charCodeAt(i) - 'a'.charCodeAt(0)] || 1) + 1
            }

            if(hashmap[count]) {
                hashmap[count].push(str);
            } else {
                hashmap[count] = [str]
            }
        })

        return Object.values(hashmap)
    }
}
