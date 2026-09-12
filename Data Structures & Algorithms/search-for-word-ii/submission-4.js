class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }

    addWord(word) {
        let cur = this;
        for(let c of word) {
            if(!cur.children.has(c)) {
                cur.children.set(c, new TrieNode())
            }
            cur = cur.children.get(c)
        }
        cur.endOfWord = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let root = new TrieNode();
        for(let word of words) {
            root.addWord(word);
        }
        const rows = board.length;
        const cols = board[0].length;
        const res = new Set();

        const backTracking = (r,c,node,word) => {
            if(r < 0 || c < 0 || r >= rows || c >= cols || !node.children.has(board[r][c]) || board[r][c] === '#') return;

            const el = board[r][c];
            word += el;
            board[r][c] = '#'
            node = node.children.get(el);
            if(node.endOfWord) {
                res.add(word)
            }
            backTracking(r + 1, c, node, word)
            backTracking(r - 1, c, node, word)
            backTracking(r, c + 1, node, word)
            backTracking(r, c - 1, node, word)

            board[r][c] = el
        }

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                backTracking(r,c,root,"");
            }
        }
        return Array.from(res)
    }
}
