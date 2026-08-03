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
        const timeStampMap = {};
        timeStampMap[timestamp] = value;

        if(this.keyStore.has(key)) {
            const newVal = this.keyStore.get(key);
            newVal.push(timeStampMap)
            this.keyStore.set(key, newVal)
        } else {
            this.keyStore.set(key, [timeStampMap])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";
        const arr = this.keyStore.get(key);
        let res = "";

        let l = 0;
        let r = arr.length - 1;

        while(l <= r) {
            var mid = Math.floor((l + r) / 2);

            if(Object.keys(arr[mid])[0] <= timestamp) {
                res = Object.values(arr[mid])[0]
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return res;
    }
}
