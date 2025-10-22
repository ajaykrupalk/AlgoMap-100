/**
 * Time Complexity: O(n*n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Transpose the matrix (swap elements along the diagonal)
 * - For each i from 0 to n-1 and j from i+1 to n-1, swap matrix[i][j] with matrix[j][i]
 * 2. Reflect the matrix horizontally (swap elements across the vertical middle)
 * - For each i from 0 to n-1 and j from 0 to n/2-1, swap matrix[i][j] with matrix[i][n-j-1]
 */
var rotate = function (matrix) {
    const n = matrix.length;

    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j<n/2;j++) {
            [matrix[i][j], matrix[i][n-j-1]] = [matrix[i][n-j-1], matrix[i][j]]
        }
    }
}