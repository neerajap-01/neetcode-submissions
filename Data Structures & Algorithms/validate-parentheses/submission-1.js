class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        s = s.split('');
        let stack = [s.pop()];
        const map = {
            "[": "]",
            "(": ")",
            "{": "}",
            "]": "[",
            ")": "(",
            "}": "{",
        };

        for (let i = s.length - 1; i >= 0; i--) {            
            if (stack[stack.length - 1] == map[s[i]]) {
                stack.pop();
                continue;
            }
            stack.push(s[i]);
        }
        return !stack.length > 0;
    }
}
