class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let total = 0, current = 0, res = 0;
        for(let i = 0; i < gas.length; i++) {
            const netVal = gas[i] - cost[i];
            total += netVal;
            current += netVal;
            if(current < 0) {
                current = 0;
                res = i + 1;
            }
        }
        return total < 0 ? -1 : res;
    }
}
