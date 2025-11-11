/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Approach:
 * Approach:
 * 1. Initialize two pointers: `left = 0` and `right = nums.length - 1`.
 * 2. While `left <= right`:
 *    a. Compute the middle index: `mid = Math.floor((left + right) / 2)`.
 *    b. If `nums[mid] === target`, return `mid`.
 *    c. If `nums[mid] > target`, move the search to the left: `right = mid - 1`.
 *    d. Else (nums[mid] < target), move the search to the right: `left = mid + 1`.
 * 3. If the loop ends, the target is not in the array — return `-1`.
 */
var search = function(nums, target) {
    let l = 0, r = nums.length-1;
    while(l<=r){
        const mid = Math.floor((l+r)/2)

        if(nums[mid] === target){
            return mid
        }
        else if(nums[mid]>target){
            r = mid-1
        } else {
            l = mid+1
        }
    }
    return -1
};