class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let l = 0;
        let r = rows - 1;
        let findIdx = -1;
        while(l <= r) {
            const mid = Math.floor((l + r) / 2);

            if(target > matrix[mid][cols - 1]) {
                l = mid + 1;
            } else if(target < matrix[mid][0]) {
                r = mid - 1;
            } else {
                findIdx = mid;
                break;
            }
        }

        if(findIdx == -1) return false;

        let newArr = matrix[findIdx];
        let i = 0;
        let j = newArr.length - 1;

        while (i <= j) {
            const mid = Math.floor((i + j) / 2);

            if(target > newArr[mid]) {
                i = mid + 1;
            } else if(target < newArr[mid]) {
                j = mid - 1;
            } else {
                return true
            }
        }

        return false;
    }
}
