class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
      const subCheck = {};
      for(let i = 0; i < board.length; i++) {
        const rowSet = new Set();
        const colSet = new Set();
        for(let j = 0; j < board[i].length; j++) {
          //Row check
          if(rowSet.has(board[i][j])) return false
          if(board[i][j] != '.') rowSet.add(board[i][j])


          //Column check
          if(colSet.has(board[j][i])) return false
          if(board[j][i] != '.') colSet.add(board[j][i])

          if(board[i][j] != '.') {
            const questionKey = `${Math.floor(i/3)}-${Math.floor(j/3)}`

            if(subCheck[questionKey] && subCheck[questionKey].has(board[Math.floor(i)][Math.floor(j)])) return false;
            if(!subCheck[questionKey]) {
              subCheck[questionKey] = new Set()
            }
            subCheck[questionKey].add(board[Math.floor(i)][Math.floor(j)])
          }
        }
      }

      return true;
    }
}
