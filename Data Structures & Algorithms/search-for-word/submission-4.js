class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
      const rows = board.length;
      const cols = board[0].length;
      const backTracking = (r,c, idx) => {
        if(idx === word.length) return true;

        if(r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] === '#' || board[r][c] !== word[idx]) return false;
        const char = board[r][c];
        board[r][c] = '#'

        if(backTracking(r + 1,c, idx + 1) || backTracking(r - 1,c, idx + 1) || backTracking(r,c + 1, idx + 1) || backTracking(r,c - 1, idx + 1)) return true

        board[r][c] = char;

        return false;
      }

      for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
          if(board[i][j] === word[0]) {
            if(backTracking(i, j, 0)) return true
          }
        }
      }

      return false;
    }
}
