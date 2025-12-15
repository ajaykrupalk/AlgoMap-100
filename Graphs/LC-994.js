/**
 * Time Complexity: O(rows * cols) - visit each cell once
 * Space Complexity: O(rows * cols) - queue can hold all cells in worst case
 * Approach: 
 * Multi-source BFS to spread rot from all initial rotten oranges level by level
 * 1. Count fresh oranges and add all initial rotten oranges to queue
 * 2. Handle edge case: no fresh oranges to rot
 * 3. Process BFS level by level (each level represents 1 minute)
 * 4. For each rotten orange at current level, explore 4 adjacent cells
 * 5. Mark fresh oranges as rotten and add to queue
 * 6. Increment minutes only when oranges actually rot at a level
 * 7. Return minutes if all oranges rotted, else return -1 if fresh oranges remain
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const queue = []
    let freshcount = 0

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] === 2) queue.push([r,c])
            if(grid[r][c] === 1) freshcount++
        }
    }

    if(freshcount==0) return 0

    const directions = [[1,0],[-1,0],[0,1],[0,-1]]
    let minutes = 0;

    while(queue.length && freshcount > 0){
        const size = queue.length;
        minutes++

        for(let i = 0; i < size; i++){
            const [r,c] = queue.shift()

            for(const [dr,dc] of directions){
                const nr = r+dr
                const nc = c+dc

                if(
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2;
                    freshcount--;
                    queue.push([nr,nc])
                }
            }
        }
    }

    return freshcount === 0 ? minutes : -1

};