class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
      const rows = board.length;
      const cols = board[0].length;
      
      const backTracking = (r, c, i) => {
        if(i === word.length) return true;

        if(r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] === '#' || board[r][c] !== word[i]) return false;

        const char = board[r][c];
        board[r][c] = '#';
        if(backTracking(r + 1, c, i + 1) || backTracking(r - 1, c, i + 1) || backTracking(r, c + 1, i + 1) || backTracking(r, c - 1, i + 1)) return true

        board[r][c] = char;
        return false;
      }

      for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
          if(backTracking(r, c, 0)) return true
        }
      }

      return false;
    }
}
