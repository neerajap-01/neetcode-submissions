class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const subBoardMap = new Map();

        for (let i = 0; i < board.length; i++) {
            const rowSet = new Set();
            const colSet = new Set();

            for (let j = 0; j < board[i].length; j++) {
                //Row set check
                if(rowSet.has(board[i][j])) return false;
                if(board[i][j] !== '.') rowSet.add(board[i][j]);

                //Col set check
                if(colSet.has(board[j][i])) return false;
                if(board[j][i] !== '.') colSet.add(board[j][i]);    

                //Sub 3x3 Board check
                if(board[i][j] !== '.') {
                    const subBoardQuery = `${Math.floor(i/3)}-${Math.floor(j/3)}`;
                    if(subBoardMap.get(subBoardQuery) && subBoardMap.get(subBoardQuery).has(board[i][j])) return false
                    else if(subBoardMap.get(subBoardQuery)) subBoardMap.get(subBoardQuery).add(board[i][j])
                    else subBoardMap.set(subBoardQuery, new Set(board[i][j]));
                }
            }
        }

        return true
    }
}
