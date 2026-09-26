class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let maxOpen = 0, minOpen = 0;

        for(let l of s) {
            if(l === '(') {
                maxOpen++
                minOpen++
            } else if(l === ')') {
                maxOpen--
                minOpen--
            } else {
                maxOpen++
                minOpen--
            }
            if(maxOpen < 0) return false;
            minOpen = Math.max(0, minOpen)
        }
        return minOpen === 0;
    }
}
