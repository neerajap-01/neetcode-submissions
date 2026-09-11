class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const dr = [-1,1,0,0];
        const dc = [0,0,1,-1];
        let max = 0;

        for(let r1 = 0; r1 < rows; r1++) {
            for(let c1 = 0; c1 < cols; c1++) {
                let sum = 0;
                if(grid[r1][c1] == 1) {
                    const queue = [[r1,c1]];
                    grid[r1][c1] = 0;
                    sum++;

                    while(queue.length) {
                        const [r2,c2] = queue.shift();

                        for(let i = 0; i < 4; i++) {
                            const r3 = r2 + dr[i];
                            const c3 = c2 + dc[i];

                            if(r3 < 0 || c3 < 0 || r3 >= rows || c3 >= cols || grid[r3][c3] == 0) continue;
                            queue.push([r3,c3]);
                            grid[r3][c3] = 0;
                            sum++;
                        }
                    }

                    max = Math.max(max,sum)
                }
            }
        }

        return max;
    }
}
