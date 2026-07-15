class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length-1;

        while(l < r) {
            if(target < numbers[l] + numbers[r]) {
                r--
            } else if(target > numbers[l] + numbers[r]) {
                l++
            } else {
                return [l+1, r+1]
            }
        }
    }
}
