class MinStack {
    constructor() {
        this.stack = [];
        this.minVal = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const min = Math.min(...this.minVal, val);
        if(min === val) {
            this.minVal.push(min)
        }
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        const temp = this.stack.pop();
        if(temp === this.minVal[this.minVal.length - 1]) {
            this.minVal.pop()
        }
        return temp
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minVal[this.minVal.length-1]
    }
}
