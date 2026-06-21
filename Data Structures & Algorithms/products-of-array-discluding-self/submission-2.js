class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        let product = 1;

        //Pre product
        for(let i in nums) {
            res[i] = product;
            product *= nums[i];
        }

        product = 1;

        //Post product
        for(let j = nums.length-1; j >= 0; j--){
            res[j] *= product;
            product *= nums[j]
        }

        return res;
    }
}
