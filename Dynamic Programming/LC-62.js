/**
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 * Approach:
 * 1. Create an m x n DP table
 * 2. Initialize first row and first column with 1s (base cases)
 * 3. For every other cell, fill using: dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 4. Return dp[m-1][n-1]
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

    for(let i = 0; i < m; i++){
        for(let j = 0; j < 1; j++){
            dp[i][j] = 1
        }
    }

    for(let i = 0; i < 1; i++){
        for(let j = 0; j < n; j++){
            dp[i][j] = 1
        }
    }

    for(let i = 1; i < m;i++ ){
        for(let j = 1; j < n;j++){
            dp[i][j] = dp[i-1][j]+dp[i][j-1]
        }
    }

    return dp[m-1][n-1]
};