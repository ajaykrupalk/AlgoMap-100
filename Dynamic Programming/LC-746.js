/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. Create dp array where dp[i] = min cost to reach step i
 * 2. Initialize base cases: dp[0] = cost[0], dp[1] = cost[1]
 * 3. For each step i from 2 to n-1, calculate dp[i] = cost[i] + min(dp[i-1], dp[i-2])
 * 4. Return minimum of last two steps (can reach top from either)
 */
var minCostClimbingStairs = function(cost) {
    let minCost = 0
    const dp = new Array(cost.length)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for(let i = 2; i < cost.length; i++){
        dp[i] = cost[i]+Math.min(dp[i-1],dp[i-2])
    }
    return Math.min(dp[cost.length-1],dp[cost.length-2])
};