class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      const map = {
        ')': '(',
        '}': '{',
        ']': '['
      }
      const stack = [];
      for(let item of s) {
        if(item in map && stack[stack.length - 1] === map[item]) stack.pop();
        else stack.push(item);
      }
      return stack.length === 0;
    }
}
