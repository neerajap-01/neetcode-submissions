class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;
        for(let c of word) {
            if(!cur.children.has(c)) {
                cur.children.set(c, new TrieNode())
            }
            cur = cur.children.get(c);
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (j, root) => {
            let cur = root;

            for (let i = j; i < word.length; i++) {
                const c = word[i]
                if(c === '.') {
                    for(let child of cur.children.values()) {
                        if(dfs(i + 1, child)) return true
                    }
                    return false;
                } else {
                    if(!cur.children.has(c)) return false;
                    cur = cur.children.get(c);
                }
            }

            return cur.endOfWord;
        }

        return dfs(0, this.root)
    }
}
