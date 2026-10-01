class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const hashMap = [];

        for(let i = 0; i < position.length; i++) {
            const distance = target - position[i];
            const time = distance / speed[i];

            hashMap[time] = (hashMap[time] || 0) + 1
        }

        return Object.keys(hashMap).length;
    }
}
