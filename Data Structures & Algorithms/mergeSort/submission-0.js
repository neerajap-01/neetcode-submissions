/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    merge(left,right) {
        const res = [];

        let p1 = 0, p2 = 0;

        while (p1 < left.length && p2 < right.length) {
            if (left[p1].key <= right[p2].key) {
                res.push(left[p1])
                p1++
            } else {
                res.push(right[p2])
                p2++
            }
        }

        while (p1 < left.length) {
            res.push(left[p1])
            p1++
        }

        while (p2 < right.length) {
            res.push(right[p2])
            p2++
        }

        return res;
    }

    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        if (pairs.length <= 1) return pairs;

        const mid = Math.round(pairs.length / 2);
        const left = this.mergeSort(pairs.slice(0, mid));
        const right = this.mergeSort(pairs.slice(mid, pairs.length));
        
        return this.merge(left, right)
    }
}
