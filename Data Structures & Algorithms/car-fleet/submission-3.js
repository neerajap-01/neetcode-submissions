class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((val,idx) => [val,speed[idx]]).sort((a,b) => a[0] - b[0])
        const stack = [];

        for(let i = pairs.length-1; i >= 0; i--) {
            const [p,s] = pairs[i];
            const time = (target - p) / s;

            if(stack.length == 0 || stack[stack.length - 1] < time) {
                stack.push(time)
            }
        }

        return stack.length;
    }
}
