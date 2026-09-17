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

        const map = new Map();
        for(let word of wordList) {
            for(let i = 0; i < word.length; i++) {
                const pattern = word.substring(0,i) + '*' + word.substring(i+1)
                if(!map.has(pattern)) map.set(pattern, []);
                map.get(pattern).push(word);
            }
        }

        let queue = [beginWord];
        let visited = new Set([beginWord]);
        let count = 1;

        while(queue.length) {
            const nextQueue = [];
            for(let i = 0; i < queue.length; i++) {
                const word = queue[i];
                if(word === endWord) return count;

                for(let j = 0; j < word.length; j++) {
                    const pattern = word.substring(0,j) + '*' + word.substring(j+1)
                    for(let nextWord of map.get(pattern) || []) {
                        if(!visited.has(nextWord)) {
                            nextQueue.push(nextWord);
                            visited.add(nextWord);
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
