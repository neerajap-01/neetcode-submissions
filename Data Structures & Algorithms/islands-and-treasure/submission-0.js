class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let queue = [];
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] === 0) queue.push([r,c])
            }
        }

        const inf = 2147483647;
        const dr = [1,-1,0,0];
        const dc = [0,0,1,-1];
        let dist = 0
        while(queue.length) {
            const nextQueue = [];
            dist++
            for(let i = 0; i < queue.length; i++) {
                const [r1,c1] = queue[i];
                for(let j = 0; j < 4; j++) {
                    const r2 = r1 + dr[j];
                    const c2 = c1 + dc[j];

                    if(r2 < 0 || c2 < 0 || r2 >= rows || c2 >= cols || grid[r2][c2] === -1 || grid[r2][c2] !== inf || grid[r2][c2] === 0) continue;

                    grid[r2][c2] = dist;
                    nextQueue.push([r2,c2])
                }
            }
            queue = nextQueue;
        }
    }
}
