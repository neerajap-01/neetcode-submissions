class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = "";
        for(let char of strs) {
            string += char + "~|~"
        }
        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = str.split('~|~');
        strs.pop();
        return strs;
    }
}
