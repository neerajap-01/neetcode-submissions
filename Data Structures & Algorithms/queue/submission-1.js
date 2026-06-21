class Node {
    constructor(val = null) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.size;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newNode = new Node(value);
        
        if(!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) return -1;

        const tail = this.tail;
        this.tail = tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.size--

        return tail.val;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) return -1;

        const head = this.head;
        this.head = head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.size--

        return head.val;
    }
}