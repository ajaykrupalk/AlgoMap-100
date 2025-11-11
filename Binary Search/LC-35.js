/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Get the length `n` of the array `nums`.
 * 2. Initialize two pointers: `l = 0` and `r = n - 1` for binary search.
 * 3. While `l <= r`:
 *    a. Compute the middle index: `m = Math.floor((l + r) / 2)`.
 *    b. If `nums[m] < target`, adjust `l = m + 1` to search the right half.
 *    c. If `nums[m] > target`, adjust `r = m - 1` to search the left half.
 *    d. If `nums[m] === target`, return `m`.
 * 4. After the loop, check if `nums[m] < target`: if true, return `m + 1`; otherwise, return `m` as the insertion point.
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length-1, mid = 0;
    while(l<=r){
        mid = Math.floor((l+r)/2)
        console.log(l,r,mid)

        if(nums[mid] === target){
            return mid
        }
        else if(nums[mid]>target){
            r = mid-1
        } else {
            l = mid+1
        }
    }
    return nums[mid]<target ? mid+1 : mid
};

console.log(searchInsert([1,3,5,6],7))