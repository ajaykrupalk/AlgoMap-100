/**
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 * Approach:
 * Uses dynamic programming with a 2D table where dp[i][j] represents the LCS length
 * of the first i characters of text1 and first j characters of text2.
 * - If characters match: extend the LCS from diagonal cell (dp[i-1][j-1] + 1)
 * - If characters don't match: take the max LCS from either ignoring current char 
 *   from text1 (cell above) or ignoring current char from text2 (cell to the left)
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = new Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(text1[i-1] === text2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1
            } else {
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[m][n]
}