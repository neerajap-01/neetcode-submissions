class Node {
    constructor(key = 0, val = 0) {
        this.key = key
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.hashMap = new Map();
        this.head = new Node(0,0);
        this.tail = new Node(0,0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insert(node) {
        const nextNode = this.head.next;

        this.head.next = node;
        node.next = nextNode;

        node.prev = this.head;
        nextNode.prev = node;
    }

    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.hashMap.has(key)) {
            const node = this.hashMap.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        } else {
            return -1
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.hashMap.has(key)) {
            this.remove(this.hashMap.get(key))
        }

        const newNode = new Node(key, value);
        this.hashMap.set(key, newNode);
        this.insert(newNode);

        if (this.hashMap.size > this.cap) {
            const lru = this.tail.prev;
            this.remove(lru);
            this.hashMap.delete(lru.key)
        }
    }
}
