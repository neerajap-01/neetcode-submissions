class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
       const binarySearch = (arr, t, findArr = false) => {
        let l = 0;
        let r = arr.length - 1;

        while(l <= r) {
            var mid = Math.floor((l + r) / 2);

            if(arr[mid] > t) {
                r = mid - 1;
            } else if(arr[mid] < t) {
                l = mid + 1;
            } else {
                return mid;
            }
        }

        return findArr ? mid : -1;
       } 

       const newArray = matrix.map(arr => arr[0]);
       const findIdx = binarySearch(newArray, target, true);
       const res = findIdx != -1 ? binarySearch(matrix[findIdx],target) : -1

       return  res == -1 ? false : true
    }
}
