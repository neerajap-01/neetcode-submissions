class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if((hand.length % groupSize) !== 0) return false; 
        hand.sort((a, b) => a - b)
        const map = new Map();
        for(let n = 0; n < hand.length; n++) {
            map.set(hand[n], (map.get(hand[n]) || 0) + 1);
        }
        for(let i = 0; i < hand.length; i++) {
            let el = hand[i];
            if(map.get(el) === 0) continue;
            // map.set(el, map.get(el) - 1);
            for(let j = 0; j < groupSize; j++) {
                if(!map.has(el) || map.get(el) === 0) return false;
                map.set(el, map.get(el) - 1);
                el++
            }
        }
        return true;
    }
}
