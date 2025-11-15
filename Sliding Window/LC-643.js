/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Compute the sum of the first `k` elements and initialize `maxAvg = curSum / k`.
 * 2. Iterate `i` from `k` to `n - 1`, sliding the window each step by:
 *    a. Adding `nums[i]` and subtracting `nums[i - k]` from the running sum.
 *    b. Computing the current average `curSum / k` and updating `maxAvg` if larger.
 * 3. Return `maxAvg` as the maximum average value found.
 */
var findMaxAverage = function(nums, k) {
    let curSum = 0
    for(let i = 0; i < k; i++){
        curSum += nums[i]
    }
    let maxAvg = curSum/k;
    for(let i = k; i < nums.length; i++){
        curSum += nums[i];
        curSum -= nums[i-k];

        const avg = curSum/k;
        maxAvg = Math.max(maxAvg,avg)
    }
    return maxAvg
};