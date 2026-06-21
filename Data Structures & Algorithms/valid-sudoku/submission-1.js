class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const map = new Map();
        for(let i = 0; i < board.length; i++) {
            const rowSet = new Set();
            const colSet = new Set();

            for(let j = 0; j < board[i].length; j++) {
                //Row check
                if(rowSet.has(board[i][j])) return false;
                if(board[i][j] != '.') rowSet.add(board[i][j])

                //Col check
                if(colSet.has(board[j][i])) return false;
                if(board[j][i] != '.') colSet.add(board[j][i])

                //Sub board check 3x3
                if(board[i][j] != '.') {
                    const sqrKey = `${Math.floor(i/3)},${Math.floor(j/3)}`;

                    if(map.has(sqrKey) && map.get(sqrKey).has(board[i][j])) return false

                    if(!map.has(sqrKey)) map.set(sqrKey, new Set())
                    map.get(sqrKey).add(board[i][j]);
                }
            }
        }
        return true
    }
}
