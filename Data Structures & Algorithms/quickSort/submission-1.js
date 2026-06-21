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
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs, start = 0, end = pairs.length - 1) {
        if (end - start + 1 <= 1) return pairs;

        let p = start;
        let pivotIdx = end;

        for (let i = start; i <= end; i++) {
            if (pairs[i].key < pairs[pivotIdx].key) {
                let temp = pairs[p];
                pairs[p] = pairs[i];
                pairs[i] = temp;
                p++;   
            }
        }

        let temp = pairs[p];
        pairs[p] = pairs[pivotIdx];
        pairs[pivotIdx] = temp;

        this.quickSort(pairs, start, p - 1);
        this.quickSort(pairs, p + 1, end);

        return pairs;
    }
}
