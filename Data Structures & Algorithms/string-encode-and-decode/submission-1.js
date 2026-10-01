class Solution {

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = '';

        for(let str of strs) {
            string = string ? string+"|"+str : str
        }

        return string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        let word = '';
        for(let s of str) {
           if(s == "|") {
               strs.push(word)
               word = ""
           } else{
               word += s
           }
        }
        strs.push(word)

        return strs
    }
}
