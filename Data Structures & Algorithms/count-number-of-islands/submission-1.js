class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let count = 0;
        for(let r1 = 0; r1 < rows; r1++) {
            for(let c1 = 0; c1 < cols; c1++) {
                if(grid[r1][c1] == "1") {
                    const queue = [[r1,c1]];
                    grid[r1][c1] = "0";
                    while(queue.length) {
                        const [r2, c2] = queue.shift();
                        const neighbours = [[1,0],[-1,0],[0,1],[0,-1]];
                        for(let [dr, dc] of neighbours) {
                            const r3 = r2 + dr;
                            const c3 = c2 + dc;
                            if(r3 < 0 || c3 < 0 || r3 >= rows || c3 >= cols || grid[r3][c3] == "0") continue
                            queue.push([r3,c3]);
                            grid[r3][c3] = "0";
                        }
                    }
                    count++
                }
            }
        }
        return count;
    }
}
