class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        const res = [];

        //Pre Product cal
        for(let i = 0; i < nums.length; i++) {
            res[i] = product;
            product *= nums[i]
        }

        product = 1;

        //Post procduct cal
        for(let j = nums.length-1; j >= 0; j--) {
            res[j] *= product
            product *= nums[j]
        }

        return res;
    }
}
