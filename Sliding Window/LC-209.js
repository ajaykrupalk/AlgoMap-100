/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize `l = 0`, `sum = 0`, and `minLength = Infinity` to track the smallest valid subarray length.
 * 2. Iterate `r` from 0 to n-1 and add `nums[r]` to `sum` for each step.
 * 3. While `sum >= target`, update `minLength = Math.min(minLength, r - l + 1)`, subtract `nums[l]` from `sum`, and increment `l` to shrink the window.
 * 4. Continue until the end of the array; `minLength` will hold the smallest window length meeting the target.
 * 5. Return `minLength` if it's finite, otherwise return 0.
 */
var minSubArrayLength = function (nums, target) {
    let l = 0, sum = 0, minLength = Infinity;
    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];
        while (sum >= target) {
            minLength = Math.min(minLength, r - l + 1);
            sum -= nums[l];
            l++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}