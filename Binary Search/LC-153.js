/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize two pointers: `left = 0` and `right = nums.length - 1`.
 * 2. While `left < right`:
 *    a. Compute `mid = Math.floor((left + right) / 2)`.
 *    b. If `nums[mid] > nums[right]`, the minimum lies in the right half — set `left = mid + 1`.
 *    c. Otherwise (nums[mid] <= nums[right]), the minimum is in the left half (including `mid`) — set `right = mid`.
 * 3. When the loop exits, `left` points to the minimum element.
 * 4. Return `nums[left]`.
 */
var findMin = function (nums){
    let l = 0; r = nums.length-1;
    while(l<r){
        const mid = Math.min((l+r)/2)

        if(nums[mid]>nums[r]){
            l = mid+1
        } else {
            r = mid
        }
    }
    return nums[l]
}