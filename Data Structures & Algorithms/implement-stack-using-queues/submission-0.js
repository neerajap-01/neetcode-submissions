class MyStack {
    constructor() {
        this.q1 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q1.push(x);
        return;
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.empty()) return 0;
        const topVal = this.top();
        let currentVal = this.q1.shift();
        while (currentVal != topVal) {
            this.q1.push(currentVal);
            currentVal = this.q1.shift();
            
        }

        return currentVal;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.empty()) return 0;
        return this.q1[this.q1.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.q1.length
    }
}