class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const newArr = [];
        for(let t of triplets) {
            if(t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) continue
            newArr.push(t);
        };

        const set = new Set();
        for(let t of newArr) {
            if(t[0] === target[0]) set.add(0)
            if(t[1] === target[1]) set.add(1)
            if(t[2] === target[2]) set.add(2)
        }
        return set.size === target.length;
    }
}
