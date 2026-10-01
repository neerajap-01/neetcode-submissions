class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const n = wordList.findIndex((word) => word == endWord)
        return n == -1 ? 0 : n + 2
    }
}
