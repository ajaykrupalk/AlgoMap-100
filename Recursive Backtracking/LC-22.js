/**
 * Time Complexity: O(4^n / sqrt(n)) - Catalan number; the nth Catalan number bounds valid parentheses sequences
 * Space Complexity: O(n) for the recursion depth (max depth is 2*n)
 * Approach:
 * 1. Initialize an empty result array `result` to store all valid parentheses combinations.
 * 2. Define a recursive backtracking function `backtrack(current, open, close)` with three parameters: current string, count of open parens, count of close parens.
 * 3. Base case: when `current.length === 2*n`, a complete valid sequence is formed; add it to `result` and return.
 * 4. For open parentheses: if `open < n`, add an open paren, increment `open`, and recurse: `backtrack(current + "(", open + 1, close)`.
 * 5. For close parentheses: if `close < open`, add a close paren, increment `close`, and recurse: `backtrack(current + ")", open, close + 1)`.
 * 6. The condition `close < open` ensures close parens are only added when there are unmatched open parens, maintaining validity.
 * 7. Call `backtrack("", 0, 0)` starting with an empty string and both counters at 0.
 * 8. Return all valid parentheses combinations in `result`.
 */
var generateParanthesis = function (n){
    const result = []
    function backtrack(current,open,close){
        if(current.length === 2*n){
            result.push(current)
            return
        }

        if(open<n){
            backtrack(current+"(",open+1,close)
        }

        if(close<open){
            backtrack(current+")",open,close+1)
        }
    }

    backtrack("",0,0)
    return result
}