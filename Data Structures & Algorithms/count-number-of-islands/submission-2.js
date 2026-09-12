class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const dr = [1,-1,0,0];
        const dc = [0,0,1,-1];
        let count = 0;
        let queue = [];

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] === "1") {
                    queue.push([r,c])
                    grid[r][c] = '0'
                    count++

                    while(queue.length) {
                        const nextQueue = [];
                        for(let i = 0; i < queue.length; i++) {
                            const [r1,c1] = queue[i];

                            for(let j = 0; j < dr.length; j++) {
                                const r2 = r1 + dr[j];
                                const c2 = c1 + dc[j];

                                if(r2 < 0 || c2 < 0 || r2 >= rows || c2 >= cols || grid[r2][c2] === '0') continue;
                                nextQueue.push([r2,c2])
                                grid[r2][c2] = '0'
                            }
                            queue = nextQueue;
                        }
                    }
                }
            }
        }
        return count;
    }
}
