class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.includes(endWord)) return 0;

        const nei = {};
        wordList.push(beginWord);
        for(let word of wordList) {
            for(let i = 0; i < word.length; i++) {
                const pattern = word.substring(0, i) + '*' + word.substring(i + 1);
                if(!nei[pattern]) nei[pattern] = [];
                nei[pattern].push(word);
            }
        }

        let queue = [beginWord];
        let visited = new Set([beginWord]);
        let res = 1;
        while(queue.length) {
            const nextQueue = [];
            for(let i = 0; i < queue.length; i++) {
                const word = queue[i];
                if(word === endWord) return res;
                for(let j = 0; j < word.length; j++) {
                    const pattern = word.substring(0, j) + '*' + word.substring(j + 1)
                    for(let ngWord of nei[pattern]) {
                        if(!visited.has(ngWord)) {
                            visited.add(ngWord)
                            nextQueue.push(ngWord);
                        }
                    }
                }
            }
            queue = nextQueue;
            res++
        }

        return 0;
    }
}
