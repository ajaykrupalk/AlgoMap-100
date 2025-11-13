/**
 * Time Complexity: O(log(m*n))
 * Space Complexity: O(1)
 * Approach:
 * 1. Let `m` be the number of rows and `n` be the number of columns.
 * 2. Treat the 2D matrix as a flattened sorted array of length `m * n`. Initialize binary search with `left = 0` and `right = m * n - 1`.
 * 3. While `left <= right`:
 *    a. Compute the middle index: `mid = Math.floor((left + right) / 2)`.
 *    b. Map `mid` to 2D coordinates: `row = Math.floor(mid / n)`, `col = mid % n`.
 *    c. Read the element `val = matrix[row][col]` and compare with `target`:
 *       i. If `val === target`, return `true`.
 *       ii. If `val < target`, search the right half: `left = mid + 1`.
 *       iii. If `val > target`, search the left half: `right = mid - 1`.
 * 4. If the loop ends, return `false` — the target does not exist in the matrix.
 */
var searchMatrix = function(matrix, target){
    const m = matrix.length;
    const n = matrix[0].length;
    let l = 0;
    let r = m*n-1;

    while(l <= r){
        const mid = matrix[i][j];
        const i = Math.floor(mid/n);
        const j = mid%n;
        const midNum = matrix[i][j];

        if(target === midNum){
            return true
        } else if(midNum > target){
            r = mid-1;
        } else {
            l = mid+1
        }
    }

    return false
}