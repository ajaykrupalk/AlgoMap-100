/**
 * Time Complexity: O(m*n) where m and n are grid dimensions; each cell is visited once during DFS
 * Space Complexity: O(m*n) for the recursion call stack in worst case (when island spans entire grid)
 * Approach:
 * 1. Store grid dimensions `m` (rows) and `n` (columns) for boundary checks.
 * 2. Initialize `maxArea` to 0 to track the largest island area found.
 * 3. Define a recursive DFS function `dfs(i, j)` that calculates the area of an island starting from position (i, j).
 * 4. Base case: if out of bounds or cell is not 1, return 0 (end of island in this direction).
 * 5. Mark current cell as visited by setting `grid[i][j] = 0` to avoid revisiting.
 * 6. Recursively explore all 4 directions (down, up, right, left) and sum their areas: `1 + dfs(down) + dfs(up) + dfs(right) + dfs(left)`.
 * 7. The `1` accounts for the current cell, and each recursive call returns the area found in that direction.
 * 8. In the main loop, iterate through all cells; when a 1 is found, calculate island area using DFS and update `maxArea`.
 * 9. Return the maximum island area found.
 */
var maxAreaOfIsland = function (grid){
    const m = grid.length;
    const n = grid[0].length
    let maxArea = 0;

    function dfs(i,j){
        if(i<0 || j <0 || i>=m || j>=n || grid[i][j] !== 1) return 0

        grid[i][j] = 0;
        return (
            1+dfs(i+1,j)+dfs(i-1,j)+dfs(i,j+1)+dfs(i,j-1)
        )
    }

    for(let i = 0; i <m;i++){
        for(let j = 0; j<n;j++){
            if(grid[i][j] === 1){
                maxArea = Math.max(maxArea,dfs(i,j))
            }
        }
    }

    return maxArea
}