/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize `left = 0`, `zeroCount = 0` and `maxWidth = 0`.
 * 2. Iterate `right` from `0` to `n - 1`:
 *    a. If `nums[right] === 0`, increment `zeroCount`.
 *    b. While `zeroCount > k`, move `left` forward and decrement `zeroCount` when `nums[left] === 0`.
 *    c. Compute window size `w = right - left + 1` and update `maxWidth = Math.max(maxWidth, w)`.
 * 3. Return `maxWidth` as the longest sequence achievable with at most `k` flips.
 */
var longestOnes = function (nums,k){
    let left = 0;
    let maxLength = 0;
    let zeroCount = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right]===0){
            zeroCount++
        }

        while(zeroCount > k){
            if(nums[left]===0){
                zeroCount--
            }
            left++
        }
        maxLength = Math.max(maxLength,r-l+1)
    }
    return maxLength
}