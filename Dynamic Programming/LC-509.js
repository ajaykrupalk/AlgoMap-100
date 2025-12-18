/*
 * TIME COMPLEXITY: O(n)
 * SPACE COMPLEXITY: O(n)
 * Approach:
 * 1. Handle base cases: fib(0) = 0 and fib(1) = 1
 * 2. Initialize dp array with first two fibonacci numbers: [0, 1]
 * 3. Iterate from index 2 to n
 * 4. For each index i, calculate fib(i) as sum of previous two values: dp[i-1] + dp[i-2]
 * 5. Return dp[n] which contains the nth fibonacci number
 */
var fib = function (n){
    if(n === 0) return 0
    if(n === 1) return 1

    const dp = [0,1]
    for(let i=2;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2]
    }

    return dp[n]
}