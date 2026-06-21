class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let minNumber = Infinity;
        
        for (let i = 0; i < this.stack.length; i++) {
            if(this.stack[i] < minNumber) {
                minNumber = this.stack[i]
            }
        }

        return minNumber;
    }
}
