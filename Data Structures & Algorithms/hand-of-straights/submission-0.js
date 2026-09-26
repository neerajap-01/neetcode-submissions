class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length % groupSize !== 0) return false;
        hand.sort((a,b) => a - b);
        let map = new Map();
        for(let n = 0; n < hand.length; n++) {
            map.set(hand[n], (map.get(hand[n]) || 0) + 1)
        }
        for(let i = 0; i < hand.length; i++) {
            let x = hand[i];
            if(map.get(x) === 0) continue;
            map.set(x, map.get(x) - 1)
            for(let j = 1; j < groupSize; j++) {
                x++
                if(!map.has(x) || map.get(x) === 0) return false;
                map.set(x, map.get(x) - 1)
            }
        }
        return true;
    }
}
