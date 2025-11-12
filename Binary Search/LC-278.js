/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize two pointers: `left = 1` and `right = n`.
 * 2. While `left < right`:
 *    a. Compute the middle version: `mid = Math.floor((left + right) / 2)`.
 *    b. Call `isBadVersion(mid)` to check if the middle version is bad.
 *    c. If the middle version is bad, adjust `right = mid` (keep it in the search range for the first bad version).
 *    d. If the middle version is not bad, adjust `left = mid + 1` (search later versions).
 * 3. When the loop ends, `left` points to the first bad version — return `left`.
 */
var solution = function(isBadVersion){
    return function(n){
        let low = 1;
        let high = n;
        while(low <= high){
            const mid = Math.floor((low+high)/2)
            if(isBadVersion(mid)){
                if(isBadVersion(mid-1)) high = mid-1
                else return mid
            } else {
                low = mid+1
            }
        }
    }
}