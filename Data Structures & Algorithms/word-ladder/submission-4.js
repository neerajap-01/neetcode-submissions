class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.includes(endWord)) return 0;
        wordList.push(beginWord);

        const adj = new Map();
        for(let word of wordList) {
            for(let i = 0; i < word.length; i++) {
                const pattern = word.substring(0, i) + '*' + word.substring(i + 1)
                if(!adj.has(pattern)) adj.set(pattern, []);
                adj.get(pattern).push(word);
            }
        }

        let queue = [beginWord];
        const visited = new Set([beginWord]);
        let count = 1;
        while(queue.length) {
            const nextQueue = [];
            for(let i = 0; i < queue.length; i++) {
                const word = queue[i];
                if(word === endWord) return count
                for(let j = 0; j < word.length; j++) {
                    const pattern = word.substring(0, j) + '*' + word.substring(j + 1);
                    if(adj.has(pattern)) {
                        for(let ng of adj.get(pattern)) {
                            if(visited.has(ng)) continue;
                            visited.add(ng)
                            nextQueue.push(ng);
                        }
                    }
                }
            }
            queue = nextQueue;
            count++
        }

        return 0;
    }
}
