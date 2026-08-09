class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        const isValid = (arr, k) => {
            return arr.reduce((acc,cur) => {
                return acc += Math.ceil(cur / k)
            }, 0)
        }

        while(l <= r) {
            const mid = Math.floor((l + r) / 2);

            const result = isValid(piles, mid);

            if(result > h) {
                l = mid + 1;
            } else {
                res = Math.min(res, mid);
                r = mid - 1;
            }
        }

        return res;
    }
}
