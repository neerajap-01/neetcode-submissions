class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = new Set(["+","-","*","/"])

        for(let token of tokens) {
            if(operators.has(token)) {
                const operand1 = stack.pop();
                const operand2 = stack.pop();
                
                let result;
                switch (token) {
                    case "+":
                    result = operand2 + operand1
                    break
                    case "-":
                    result = operand2 - operand1
                    break
                    case "*":
                    result = operand2 * operand1
                    break
                    case "/":
                    result = operand2 / operand1
                    break
                }

                stack.push(Math.trunc(result))
            } else {
                stack.push(Number(token))
            }
        }

        return stack.pop()
    }
}
