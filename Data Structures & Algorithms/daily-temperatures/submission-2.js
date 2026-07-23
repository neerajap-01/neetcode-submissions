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
                const [value, index] = stack[stack.length - 1];

                temperatures[index] = i - index; 
                stack.pop();
            }

            stack.push([currentTemp, i]);
        }

        for(let [_, index] of stack) {
            temperatures[index] = 0
        }

        return temperatures;
    }
}
