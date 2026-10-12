class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ')': '(',
            '}':'{',
            ']':'['
        }
        const stack = [];
         for(let el of s) {
            if(el in map && stack[stack.length - 1] === map[el]) stack.pop();
            else stack.push(el);
        }
        return stack.length === 0;
    }
}
