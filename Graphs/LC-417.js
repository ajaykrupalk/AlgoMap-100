/**
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 * Approach:
 * 1. Create two boolean matrices (pacific, atlantic) to track cells that can reach each ocean
 * 2. Use DFS starting from Pacific ocean borders (top and left edges) to mark all reachable cells
 *    - Move to adjacent cells only if their height >= current height (water flows downhill)
 * 3. Use DFS starting from Atlantic ocean borders (bottom and right edges) to mark all reachable cells
 * 4. Collect all cells that are marked in both matrices (can reach both oceans)
 * Key insight: Reverse the direction of thinking—start from oceans and see which cells can reach them
 */

var pacificAtlantic = function (heights) {
    if (!heights || !heights.length) return [];

    const m = heights.length;
    const n = heights[0].length;

    // Track cells that can reach Pacific (top/left) and Atlantic (bottom/right)
    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

    const dfs = (r, c, visited, prevHeight) => {
        // Out of bounds or already visited or height lower than previous
        if (r < 0 || r >= m || c < 0 || c >= n || visited[r][c] || heights[r][c] < prevHeight) {
            return;
        }

        visited[r][c] = true;

        // Explore 4 directions
        dfs(r + 1, c, visited, heights[r][c]);
        dfs(r - 1, c, visited, heights[r][c]);
        dfs(r, c + 1, visited, heights[r][c]);
        dfs(r, c - 1, visited, heights[r][c]);
    };

    // DFS from Pacific ocean borders (top and left edges)
    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific, heights[i][0]);        // Left edge
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j, pacific, heights[0][j]);        // Top edge
    }

    // DFS from Atlantic ocean borders (bottom and right edges)
    for (let i = 0; i < m; i++) {
        dfs(i, n - 1, atlantic, heights[i][n - 1]); // Right edge
    }
    for (let j = 0; j < n; j++) {
        dfs(m - 1, j, atlantic, heights[m - 1][j]); // Bottom edge
    }

    // Collect cells that reach both oceans
    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
};