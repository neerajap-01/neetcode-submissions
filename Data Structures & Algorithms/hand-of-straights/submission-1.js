class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if((hand.length % groupSize) !== 0) return false; 
        const map = new Map();
        for(let n = 0; n < hand.length; n++) {
            map.set(hand[n], (map.get(hand[n]) || 0) + 1);
        }
        const arr = new Set([...hand.sort((a, b) => a - b)]);
        for(let i = 0; i < arr.size; i++) {
            let el = hand[i];
            if(map.get(el) === 0) continue;
            for(let j = 0; j < groupSize; j++) {
                if(!map.has(el) || map.get(el) === 0) return false;
                map.set(el, map.get(el) - 1);
                el++
            }
        }
        return true;
    }
}
