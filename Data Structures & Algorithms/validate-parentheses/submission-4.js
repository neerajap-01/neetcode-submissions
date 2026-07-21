class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ")":"(",
            "}":"{",
            "]":"["
        }
        const stack = [];

        for(let i of s){
            if(stack[stack.length-1] && stack[stack.length-1] == map[i]) stack.pop()
            else stack.push(i)
        }

        return !stack.length;
    }
}
