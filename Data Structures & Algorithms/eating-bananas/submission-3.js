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

      const isCheck = (k) => {
        const ans = piles.reduce((acc, cur) => {
          return acc += Math.ceil(cur / k) 
        }, 0) 

        return ans > h ? -1 : 1
      }

      while(l <= r){
        let mid = Math.floor((l + r) / 2);
        const val = isCheck(mid);

        if(val < 0) {
          l = mid + 1;
        } else {
          res = Math.min(res,mid);
          r = mid - 1;
        }
      }

      return res;
    }
}
