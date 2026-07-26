class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];

        for(let idx in temperatures) {
            const currentTemp = temperatures[idx];

            while (stack.length && currentTemp > stack[stack.length - 1][0]) {
                const [_,index] = stack.pop();
                temperatures[index] = idx - index;
            }

            stack.push([currentTemp, idx])
        }

        for(let [_,idx] of stack) {
            temperatures[idx] = 0
        }

        return temperatures;
    }
}
