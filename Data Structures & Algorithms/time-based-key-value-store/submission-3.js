class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)) {
            const val = this.keyStore.get(key);
            val.push([timestamp,value])
            this.keyStore.set(key, val)
        } else {
            this.keyStore.set(key,[[timestamp,value]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if((!this.keyStore.has(key)) || timestamp < 0) return "";

        let res = "";
        const nums = this.keyStore.get(key);
        let l = 0;
        let r = nums.length - 1;

        while(l <= r) {
            const mid = Math.floor((l + r) / 2);

            if(timestamp >= nums[mid][0]) {
                res = nums[mid][1]
                l = mid + 1;
            } else {
                r = mid - 1
            }
        }

        return res;
    }
}