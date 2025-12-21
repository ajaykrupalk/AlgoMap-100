/**
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(n) - dp array of size n
 * Approach: 
 * Build a DP array where dp[i] represents the maximum money 
 * we can rob up to house i. At each house, decide whether to rob it 
 * (and add to dp[i-2]) or skip it (and keep dp[i-1]).
 */
var rob = function(nums) {
  if(nums.length < 1) return nums.length

  const dp = new Array(nums.length)

  dp[0] = nums[0]
  dp[1] = Math.max(nums[0],nums[1])

  for(let i = 2; i < nums.length; i++){
    dp[i] = Math.max(nums[i]+dp[i-2],dp[i-1])
  }

  return dp[nums.length-1]  
};