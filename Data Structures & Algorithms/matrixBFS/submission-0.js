class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        if(grid[0][0] != 0) return -1
        const queue = [[0,0]];
        grid[0][0] = -1;

        let length = 0;

        while (queue.length) {
            const levelSize = queue.length
            for(let i = 0; i < levelSize; i++) {
                let [r, c] = queue.shift();

                if(r == rows - 1 && c == cols - 1) return length;

                const neighbours = [[1,0], [-1,0], [0,1], [0, -1]];

                for(let [row,col] of neighbours) {
                    const r1 = r + row;
                    const c1 = c + col;

                    if(Math.min(r1,c1) < 0 || r1 >= rows || c1 >= cols || grid[r1][c1] !== 0) continue;
                    queue.push([r1,c1])
                    grid[r1][c1] = -1
                }
            }
            length++;
        }

        return -1
    }
}
