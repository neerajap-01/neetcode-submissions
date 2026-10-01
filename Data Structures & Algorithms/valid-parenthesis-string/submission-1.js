class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let maxOpen = 0, minOpen = 0;
        for(let c of s) {
            if(c === '(') {
                maxOpen++
                minOpen++
            } else if(c === ')') {
                maxOpen--
                minOpen--
            } else {
                maxOpen++
                minOpen--
            }

            minOpen = Math.max(0, minOpen);
        }
        return minOpen <= 0;
    }
}
