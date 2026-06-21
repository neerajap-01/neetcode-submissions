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
        let size = this.q1.length - 1;
        let val = this.q1.shift();

        while (size > 0) {
            this.q1.push(val)
            val = this.q1.shift();
            size--;
        }

        return val;
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