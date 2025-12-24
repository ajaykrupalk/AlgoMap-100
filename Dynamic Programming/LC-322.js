/*
* Time Complexity: O(amount * coins.length)
* Space Complexity: O(amount)
* Approach:
* 1. Create dp array of size (amount + 1), initialize all to Infinity
* 2. Set dp[0] = 0 (base case: 0 coins needed to make amount 0)
* 3. For each amount i from 1 to target amount:
   - For each coin c in coins array:
     - If coin value c <= current amount i:
       - dp[i] = min(dp[i], 1 + dp[i - c])
       - (1 represents using current coin, dp[i-c] is min coins for remainder)
* 4. Return dp[amount] if it's not Infinity, else return -1
*/
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0
    for(let i = 0; i <= amount; i++){
        for(const coin of coins){
            if(coin <= i){
                dp[i] = Math.min(dp[i],dp[i-c])
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}