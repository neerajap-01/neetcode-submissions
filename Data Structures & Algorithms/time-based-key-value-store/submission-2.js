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
            val[timestamp] = value
            this.keyStore.set(key, val)
        } else {
            const val = {[timestamp]: value}
            this.keyStore.set(key,val)
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const nums = Object.keys(this.keyStore.get(key) || {});
        if(nums.length <= 0 || timestamp < 0) return "";

        let res = "";

        let l = 0;
        let r = nums.length - 1;

        while(l <= r) {
            const mid = Math.floor((l + r) / 2);

            if(timestamp >= nums[mid]) {
                res = this.keyStore.get(key)[nums[mid]]
                l = mid + 1;
            } else {
                r = mid - 1
            }

        }

        return res;
    }
}
