class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (!this.length) return -1;
        let current = this.head;
        let currentIndex = 0;

        while (current) {
            if (currentIndex == index) return current.val;
            current = current.next;
            currentIndex++;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (!this.length) return false;
        let current = this.head;
        let prev = null;
        let currentIndex = 0;
        let removed = false;

        //for head
        if (index == 0) {
            this.head = current.next;
            if (this.length == 1) this.tail = current.next;
            current.next = null;
            this.length--;
            return true;
        }

        while (current) {
            if (index == this.length - 1) {
                // for tail
                if (prev) {
                    prev.next = null;
                    this.tail = prev;
                } else {
                    current.next = null;
                    this.tail = current;
                }
                removed = true
            } else if (currentIndex == index) {
                prev.next = current.next;
                current.next = null;
                removed = true
            }

            if (removed) {
                this.length--;
                break;
            }

            prev = current;
            current = current.next;
            currentIndex++;
        }
        return removed;
    }   

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        if(!this.length) return res;

        let current = this.head;

        while (current) {
            res.push(current.val);
            current = current.next;
        }

        return res;
    }
}
