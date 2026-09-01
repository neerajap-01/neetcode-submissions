class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length < 1) return [];

        const map = {
            "2": ['a','b','c'],
            "3": ['d','e','f'],
            "4": ['g','h','i'],
            "5": ['j','k','l'],
            "6": ['m','n','o'],
            "7": ['p','q','r','s'],
            "8": ['t','u','v'],
            "9": ['w','x','y','z'],
        }

        const res = [];
        const cur = [];

        const dfs = (i) => {
            if(i >= digits.length) {
                res.push(cur.join(''));
                return;
            }

            for(let char of map[digits[i]]){
                cur.push(char);
                dfs(i+1);
                cur.pop();
            }
        }

        dfs(0)

        return res;
    }
}
