class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const set = new Set(["+","-","*","/"])

        for(let token of tokens) {
            if(set.has(token)) {
                const operand2 = stack.pop();
                const operand1 = stack.pop();

                let result;
                switch (token) {
                    case "+":
                    result = operand1 + operand2
                    break;
                    case "-":
                    result = operand1 - operand2
                    break;
                    case "*":
                    result = operand1 * operand2
                    break;
                    case "/":
                    result = operand1 / operand2
                    break;
                }

                stack.push(Math.trunc(result))
            } else {
                stack.push(Number(token))
            }   
        }

        return stack.pop();
    }
}
