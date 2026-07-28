class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a,b) => a - b);

        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while(l <= r) {
            const mid = Math.floor((l + r) / 2);

            const totalHrs = piles.reduce((acc, cur) => {
                return acc += Math.ceil(cur / mid)
            }, 0);

            if(totalHrs > h) {
                l = mid + 1;
            } else {
                res = Math.min(res,mid);
                r = mid - 1;
            }
        }

        return res;
    }
}
