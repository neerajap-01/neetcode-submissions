class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];

        for(let i = 0; i < temperatures.length; i++) {
            const currentTemp = temperatures[i];

            while(stack.length && currentTemp > stack[stack.length - 1][0]) {
                const [_, idx] = stack.pop();
                temperatures[idx] = i - idx
            }

            stack.push([currentTemp, i])
        }

        for(let [_,idx] of stack) {
            temperatures[idx] = 0
        }

        return temperatures;
    }
}
