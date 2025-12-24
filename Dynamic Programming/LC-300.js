/*
* Time Complexity: O(n²)
* Space Complexity: O(n)
* Approach:
* 1. We use a dynamic programming array `dp` where `dp[i]` represents the length of the longest increasing subsequence that ends with the element at index `i`.
* 2. We initialize each `dp[i]` to 1 because the minimum length of increasing subsequence ending at any element is 1 (the element itself).
* 3. We iterate through each element and for each element, we check all previous elements to see if we can extend the increasing subsequence.
* 4. If `nums[i] > nums[j]`, it means we can append `nums[i]` to the increasing subsequence that ends with `nums[j]`. We update `dp[i]` accordingly.
* 5. Finally, we
*/
function lengthOfLIS(nums) {
    // Edge case: empty array
    if (!nums.length) return 0;
    
    // dp[i] = length of longest increasing subsequence ending at index i
    // Initialize all to 1 because each element alone is a subsequence of length 1
    const dp = new Array(nums.length).fill(1);
    
    // Track the overall maximum LIS length found
    let maxLength = 1;
    
    // For each position i, calculate the LIS ending at i
    for (let i = 0; i < nums.length; i++) {
        
        // Look at all previous positions j before i
        for (let j = 0; j < i; j++) {
            
            // If current element is greater than element at j,
            // we can extend the subsequence ending at j
            if (nums[i] > nums[j]) {
                // dp[i] = max of current dp[i] OR (dp[j] + 1)
                // dp[j] + 1 means: take LIS ending at j, add current element
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        
        // Update global maximum after calculating dp[i]
        maxLength = Math.max(maxLength, dp[i]);
    }
    
    // Return the maximum LIS length found across all positions
    return maxLength;
}