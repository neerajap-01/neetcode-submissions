class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = '';

        for(let str of strs) {
            string += "~|"+str
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
            if(str[i] == "~" && str[i+1] == "|") {
                let string = "";
                let j = i+2;
                
                while(!(str[j] == "~" && str[j+1] == "|") && j < str.length){
                    string += str[j]
                    j++
                }

                strs.push(string)
                i = j - 1;
            }
        }

        return strs;
    }
}
