class Node {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  addNode(node) {
    node.next = this.right;
    node.prev = this.right.prev;
    this.right.prev.next = node;
    this.right.prev = node;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
      this.capacity = capacity;
      this.map = new Map();
      this.list = new DoublyLinkedList();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
      if(this.map.has(key)) {
        const node = this.map.get(key)
        this.list.remove(node)
        this.list.addNode(node);
        return node.val;
      } 
      return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
      if(this.map.get(key)) {
        this.list.remove(this.map.get(key))
      }

      const node = new Node(key, value)
      this.list.addNode(node);
      this.map.set(key, node);

      if(this.map.size > this.capacity) {
        const lruNode = this.list.left.next;
        this.list.remove(lruNode);
        this.map.delete(lruNode.key)
      }
    }
}
