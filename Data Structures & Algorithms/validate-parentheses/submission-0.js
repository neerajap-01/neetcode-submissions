class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        s = s.split('');
        let stack = [];
        const map = {
            "[": "]",
            "(": ")",
            "{": "}"
        };
    
        const length = s.length;
        for (let i = length - 1; i >= length / 2; i--) {
            stack.push(s.pop());
        }
        for (let i = stack.length - 1; i > 0; i--) {
            if(stack[i] !== map[s[i]]) return false;
        }

        return true;
    }
}
