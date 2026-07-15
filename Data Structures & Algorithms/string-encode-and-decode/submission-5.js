class Solution {

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = '';

        for(let idx in strs) {
            if(idx == 0) {
                string = "~|"+strs[idx]
            } else {
                string = string+"~|"+strs[idx]
            }
        }
        console.log(string+"~|")
        return string+"~|"
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        
        for(let i = 0; i < str.length; i++) {
           if(str[i-1] == "|" && str[i-2] == "~") {
               let word = "";
               let j = i;
               
               while(!(str[j] == "~" && str[j+1] == "|") && j < str.length) {
                   word += str[j]
                   j++
               }

               strs.push(word);
               i = j;
           } 
        }

        return strs
    }
}
