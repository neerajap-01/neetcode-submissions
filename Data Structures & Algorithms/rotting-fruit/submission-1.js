class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length
        const cols = grid[0].length

        let queue = [];
        let ff = 0;
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] == 2) queue.push([r,c])
                else if(grid[r][c] == 1) ff++
            }
        };
        let time = 0;
        const dr = [1,-1,0,0];
        const dc = [0,0,1,-1];

        while(queue.length) {
            const queueLength = queue.length;
            const nextQueue = []
            for(let i = 0; i < queueLength; i++) {
                const [r1,c1] = queue[i];

                for(let j = 0; j < dr.length; j++) {
                    const r2 = r1 + dr[j];
                    const c2 = c1 + dc[j];

                    if(r2 < 0 || c2 < 0 || r2 >= rows || c2 >= cols || grid[r2][c2] != 1) continue;
                    grid[r2][c2] = 2
                    ff--
                    nextQueue.push([r2,c2])
                }
            }
            queue = nextQueue;
            time++
        }

        return ff <= 0 ? time == 0 ? time : time - 1 : -1
    }
}
