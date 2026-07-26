class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const set = new Set(["+","*","-","/"])

        for(let token of tokens) {
            if(set.has(token)) {
                let res;
                const operand2 = stack.pop();
                const operand1 = stack.pop();

                switch(token) {
                    case "+":
                    res = operand1 + operand2
                    break;
                    case "-":
                    res = operand1 - operand2
                    break;
                    case "*":
                    res = operand1 * operand2
                    break;
                    case "/":
                    res = operand1 / operand2
                    break;
                }

                stack.push(Math.trunc(res))
            } else {
                stack.push(Number(token))
            }
        }

        return stack.pop();
    }
}
