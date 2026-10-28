class TrieNode {
  constructor() {
    this.children = new Map()
    this.endOfWord = false;
  }  

  addWord(word) {
    let cur = this;
    for(let c of word) {
      if(!cur.children.has(c)) cur.children.set(c, new TrieNode())
      cur = cur.children.get(c)
    }
    cur.endOfWord = true
  }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
      const root = new TrieNode();
      for(let word of words) {
        root.addWord(word)
      }

      const res = [];
      const rows = board.length;
      const cols = board[0].length;
      const backtracking = (r, c, node, str) => {
        if(r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] === '#' || !node.children.has(board[r][c])) return

        const char = board[r][c];
        board[r][c] = '#'
        str += char
        node = node.children.get(char)
        if(node.endOfWord) {
          res.push(str)
          node.endOfWord = false;
        }

        backtracking(r + 1, c, node, str)
        backtracking(r - 1, c, node, str)
        backtracking(r, c + 1, node, str)
        backtracking(r, c - 1, node, str)

        board[r][c] = char
      }

      for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
          backtracking(r, c, root, "")
        }
      }

      return res;
    }
}
