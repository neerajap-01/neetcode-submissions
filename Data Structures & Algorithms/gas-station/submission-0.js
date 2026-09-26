class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let current = 0, startIndex = 0, total = 0;
        for(let i = 0; i < gas.length; i++) {
            const netTotal = (gas[i] - cost[i]);
            total += netTotal;
            current += netTotal;
            if(current < 0) {
                current = 0;
                startIndex = i + 1;
            }
        }

        return total < 0 ? -1 : startIndex;
    }
}
