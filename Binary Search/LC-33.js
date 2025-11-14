/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize `left = 0` and `right = nums.length - 1`.
 * 2. While `left <= right`:
 *    a. Compute `mid = Math.floor((left + right) / 2)`.
 *    b. If `nums[mid] === target`, return `mid`.
 *    c. Determine which half is sorted:
 *       i. If `nums[left] <= nums[mid]` then the left half is sorted.
 *          - If `nums[left] <= target < nums[mid]`, search left: set `right = mid - 1`.
 *          - Otherwise, search right: set `left = mid + 1`.
 *       ii. Else the right half is sorted.
 *          - If `nums[mid] < target <= nums[right]`, search right: set `left = mid + 1`.
 *          - Otherwise, search left: set `right = mid - 1`.
 * 3. If the loop ends, the target is not present — return `-1`.
 */
var search = function(nums, target) {
    let l = 0, r = nums.length-1;
    while(l<=r){
        const mid = Math.floor((l+r)/2)

        if(nums[mid] === target){
            return mid
        }

        if(nums[l] <= nums[mid]){
            if(nums[l]<=target && target > nums[mid]){
                r = mid-1
            } else {
                l = mid+1
            }
        } else {
            if(nums[mid] < target && target <= nums[r]){
                l = mid+1
            } else {
                r = mid-1
            }
        }
    }

    return -1
}