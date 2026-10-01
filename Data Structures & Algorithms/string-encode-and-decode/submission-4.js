class Solution {

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = '';

        for(let idx in strs) {
            if(idx == 0) {
                string = strs[idx]
            } else {
                string = string+"~"+strs[idx]
            }
        }

        return string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        let word;
        for(let s of str) {
           if(s == "|") {
               strs.push(word)
               word = ""
           } else {
               if(!word) word = ""
               word += s
           }
        }
        if(word !== undefined) strs.push(word)

        return strs
    }
}
