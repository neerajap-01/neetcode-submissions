class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const subMap = new Map();
        for(let i = 0; i < board.length; i++) {
            const rowSet = new Set();
            const colSet = new Set();

            for(let j = 0; j < board[i].length; j++) {
                //Row check
                if(rowSet.has(board[i][j])) return false;
                if(board[i][j] != '.') rowSet.add(board[i][j]);

                //Column check
                if(colSet.has(board[j][i])) return false;
                if(board[j][i] != '.') colSet.add(board[j][i]);

                //Sub-board check 3x3
                const squareKey = `${Math.floor(i/3)},${Math.floor(j/3)}`
                if(subMap.get(squareKey) && subMap.get(squareKey).has(board[i][j])) return false;
                if(board[i][j] != '.') {
                    if(!subMap.get(squareKey)) subMap.set(squareKey, new Set());
                    subMap.get(squareKey).add(board[i][j])
                }
            }
        };

        return true;
    }
}
