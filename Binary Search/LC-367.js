/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize two pointers: `left = 1` and `right = num`.
 * 2. While `left <= right`:
 *    a. Compute the midpoint: `mid = Math.floor((left + right) / 2)`.
 *    b. Compute `mid * mid`.
 *    c. If `mid * mid === num`, return `true`.
 *    d. If `mid * mid < num`, the square is too small — set `left = mid + 1`.
 *    e. If `mid * mid > num`, the square is too large — set `right = mid - 1`.
 * 3. If the loop ends with no match, return `false`.
 */
var isPerfectSquare = function(num) {
    let l = 1, r = num;
    while(l<=r){
        const mid = Math.floor((l+r)/2)
        if(mid*mid === num){
            return true
        }else if(mid*mid > num){
            r = mid-1
        }else{
            l=mid+1
        }
    }
    return false
};