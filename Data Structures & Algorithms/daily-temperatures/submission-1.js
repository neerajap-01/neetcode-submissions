class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        for(let i = 0; i < temperatures.length; i++) {
            const currentTemp = temperatures[i]
            let j = i + 1;
            let count = 1;
            while(currentTemp >= temperatures[j] && j < temperatures.length) {
                j++
                count++
            }
            temperatures[i] = j < temperatures.length ? count : 0
        }

        return temperatures;
    }
}
