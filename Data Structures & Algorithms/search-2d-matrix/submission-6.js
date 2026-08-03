class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let findIndex = -1;

        let l = 0;
        let h = rows - 1

        while(l <= h) {
            const mid = Math.floor((l + h) / 2);

            if(target < matrix[mid][0]) {
                h = mid - 1
            } else if(target > matrix[mid][cols - 1]) {
                l = mid + 1
            } else {
                findIndex = mid;
                break
            }
        }

        if(findIndex == -1) return false;

        let newArr = matrix[findIndex];

        let left = 0;
        let right = newArr.length - 1;

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);

            if(target < newArr[mid]) {
                right = mid - 1
            } else if(target > newArr[mid]) {
                left = mid + 1
            } else {
                return true;
            }
        }

        return false;
    }
}
