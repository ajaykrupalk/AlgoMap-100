/**
 * Time Complexity: O(n) - we iterate from 3 to n once
 * Space Complexity: O(n) - we create a dp array of size n
 * Approach:
 * 1. Base cases: if n is 1 or 2, return n directly (1 way for 1 stair, 2 ways for 2 stairs)
 * 2. Create a dp array where dp[i] represents the number of ways to climb i stairs
 * 3. Initialize dp[0] = 0, dp[1] = 1, dp[2] = 2
 * 4. For each stair from 3 to n, calculate: dp[i] = dp[i-1] + dp[i-2]
 *    (you can reach stair i from either stair i-1 or stair i-2)
 * 5. Return dp[n] which contains the total number of ways to climb n stairs
 */
var climbStairs = function(n) {
    if(n<=2) return n
    
    const dp = new Array(n)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for(let i = 3; i<=n; i++){
        dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[n]
};