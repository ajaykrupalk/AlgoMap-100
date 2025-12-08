/**
 * Time Complexity: O(m * n * 4^W) where m, n are board dimensions and W is word length; at each cell, explore 4 directions up to W depth
 * Space Complexity: O(W) for the recursion depth (at most W recursive calls on the stack)
 * Approach:
 * 1. Store board dimensions `m` and `n`, and word length `W` for quick access.
 * 2. Handle edge case: if board is single cell, check if it matches the word directly.
 * 3. Define a recursive backtracking function `backtrack(i, j, index)` to search from position (i, j) for character at `word[index]`.
 * 4. Base case: if `index === W`, all characters of the word have been found; return true.
 * 5. Boundary and mismatch check: if position is out of bounds or `board[i][j] !== word[index]`, return false.
 * 6. Mark current cell as visited by setting `board[i][j] = "#"` to avoid revisiting.
 * 7. Recursively explore all 4 directions (down, up, right, left) with `index + 1` to find the next character.
 * 8. Restore the cell by setting `board[i][j] = char` (backtrack).
 * 9. Return true if any direction finds the word, otherwise return false.
 * 10. Iterate through all cells in the board as starting points; if any finds the word, return true.
 * 11. If no starting position works, return false.
 */

var exist = function (board, word){
    const m = board.length;
    const n = board[0].length;
    const W = word.length;

    if(m === 1 && n === 1){
        return board[0][0] === word
    }

    function backtrack(i,j,index){
        if(index === W) return true;

        if(i < 0 || j < 0 || i >=m || j >= n || board[i][j] !== word[index]) return false 

        const char = board[i][j];
        board[i][j] = "#"

        const found = backtrack(i+1,j,index+1) ||
                     backtrack(i-1,j,index+1) ||
                     backtrack(i,j+1,index+1) ||
                     backtrack(i,j-1,index+1)

        board[i][j] = char
        return found
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n;j++){
            if(backtrack(i,j,0)){
                return true
            }
        }
    }

    return false
}