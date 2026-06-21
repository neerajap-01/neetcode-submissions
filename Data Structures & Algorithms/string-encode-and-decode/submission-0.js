class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';

        for(let str of strs) {
            encodedString += `~|~${str.length}~|~${str}`
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStings = [];
        const algo = str.split("~|~");

        for (let i = 1; i < algo.length; i++) {
            if(i%2 == 0) decodedStings.push(algo[i]) 
        }

        return decodedStings;
    }
}
