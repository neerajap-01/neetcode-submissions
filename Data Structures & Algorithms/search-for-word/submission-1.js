class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        const dfs = (r,c,i) => {
            if(i === word.length) return true;

            if(r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i] || board[r][c] === "#") return false;

            const temp = board[r][c];
            board[r][c] = '#';

            let res = (dfs(r + 1, c, i + 1) ||
                        dfs(r - 1, c, i + 1) ||
                        dfs(r, c + 1, i + 1) ||
                        dfs(r, c - 1, i + 1))

            board[r][c] = temp;
            return res;
        }

        for(let r = 0; r < board.length; r++) {
            for(let c = 0; c < board[r].length; c++){
                if(dfs(r,c,0)) return true
            }
        }

        return false;
    }
}
