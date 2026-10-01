class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = '';

        for(let str of strs) {
            string += str.length+"|"+str
        }

        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];

        for(let i = 0; i < str.length; i++) {
            let string = '';
            let j = i+2;
            while(string.length < Number(str[i])) {
                string += str[j]
                j++
            }
            strs.push(string)
            i = j - 1
        }

        return strs;
    }
}
