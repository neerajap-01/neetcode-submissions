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
        let h = rows - 1;
        let targetIdx = -1;

        while(l <= h) {
            const mid = Math.floor((l + h) / 2);

            if(target > matrix[mid][cols - 1]) {
                l = mid + 1;
            } else if(target < matrix[mid][0]) {
                h = mid - 1;
            } else {
                targetIdx = mid
                break
            }
        }

        if(targetIdx == -1) return false;

        const targetArr = matrix[targetIdx];
        let newL = 0;
        let newH = targetArr.length - 1;

        while (newL <= newH) {
            const mid = Math.floor((newL + newH) / 2);

            if(target > targetArr[mid]) {
                newL = mid + 1;
            } else if(target < targetArr[mid]) {
                newH = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
