class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
     this.capacity = capacity || 1;
     this.size = 0
     this.arr = new Array(capacity).fill(null);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
     return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
     this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
     if(this.size == this.capacity) {
      this.resize();
     }

     this.arr[this.size] = n;
     this.size++; 
    }

    /**
     * @returns {number}
     */
    popback() {
     this.size--;
     return this.arr[this.size];
    }

    /**
     * @returns {void}
     */
    resize() {
     const newCapacity = this.getCapacity() * 2;
     const oldArr = this.arr;

     this.arr = new Array(newCapacity).fill(null);
     oldArr.forEach((val, i) => {
      if (val !== null) {
       this.arr[i] = val;
      }
     });
     this.capacity = newCapacity;
    }

    /**
     * @returns {number}
     */
    getSize() {
     return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
     return this.capacity;
    }
}
