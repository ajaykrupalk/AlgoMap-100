/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. We maintain two variables sum and maxSum.
 * 2. We iterate through the array and for each element,
 *    we update sum to be the maximum of the current element
 *    and the sum of the current element and the previous sum.
 * 3. We update maxSum to be the maximum of maxSum and sum.
 * 4. Finally, we return maxSum.
 */
var maxSubArray = function(nums) {
    let sum = nums[0], maxSum = nums[0];
    for(let i =1; i < nums.length; i++){
        sum = Math.max(nums[i], sum+nums[i])
        maxSum = Math.max(maxSum,sum)
    }
    return maxSum
};