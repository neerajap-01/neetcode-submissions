class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;
        const pSet = new Set();
        const aSet = new Set();

        const dfs = (r,c, visited, prevHeight) => {
            const key = `${r}-${c}`
            if(r < 0 || c < 0 || r >= rows || c >= cols || visited.has(key) || heights[r][c] < prevHeight) return;

            visited.add(key);

            dfs(r + 1, c, visited, heights[r][c])
            dfs(r - 1, c, visited, heights[r][c])
            dfs(r, c + 1, visited, heights[r][c])
            dfs(r, c - 1, visited, heights[r][c])
        }
        
        for(let c = 0; c < cols; c++) {
            dfs(0, c, pSet, heights[0][c]); // Top row
            dfs(rows - 1, c, aSet, heights[rows - 1][c]); //Bottom row
        }

        for(let r = 0; r < rows; r++) {
            dfs(r, 0, pSet, heights[r][0]) //Left col
            dfs(r, cols - 1, aSet, heights[r][cols - 1]) //Right col
        }

        const res = [];
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                const key = `${r}-${c}`
                if(pSet.has(key) && aSet.has(key)) res.push([r,c])
            }
        }
        return res;
    }
}
