/**
 * Time Complexity: O(m * n) where m and n are grid dimensions; each cell is visited once during DFS
 * Space Complexity: O(m * n) for the recursion call stack in worst case (when grid is all '1's, DFS depth can be m*n)
 * Approach:
 * 1. Handle edge case: if `grid` is empty or null, return 0 (no islands).
 * 2. Store grid dimensions `m` (rows) and `n` (columns) for boundary checks.
 * 3. Initialize `numOfIslands` counter to 0.
 * 4. Define a recursive DFS function `dfs(i, j)` to mark all connected '1' cells as visited.
 * 5. In DFS, check boundaries: if out of bounds or cell is not '1', return (base case).
 * 6. Mark current cell as visited by changing `grid[i][j]` to something other than '1' (implicitly happens as we explore).
 * 7. Recursively explore all 4 directions (right, left, down, up) to find all connected land cells.
 * 8. In the main loop, iterate through each cell; when a '1' is found, increment island count and call DFS to explore the entire island.
 * 9. Return the total `numOfIslands` count.
 */
var numIslands = function (grid){
    if(!grid || grid.length === 0) return 0;

    const m = grid.length;
    const n = grid[0].length;
    let numOfIslands = 0;

    function dfs(i,j){
        if(i<0 || i>=m || j<0 || j>=n || grid[i][j] !== '1') return

        grid[i][j] = '0'
        dfs(i,j+1)
        dfs(i,j-1)
        dfs(i+1,j)
        dfs(i-1,j)
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === '1'){
                numOfIslands++;
                dfs(i,j)
            }
        }
    }

    return numOfIslands;
}