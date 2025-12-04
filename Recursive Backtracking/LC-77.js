/**
 * Time Complexity: O(C(n,k) * k) where C(n,k) is the binomial coefficient
 * Space Complexity: O(C(n,k) * k) for storing all combinations
 * Approach:
 * 1. Initialize an empty result array `ans` and a current combination `path`.
 * 2. Define a recursive backtracking function `backtrack(start)` to build combinations starting from `start`.
 * 3. Base case: if `path.length === k`, add a copy of `path` to the result and return.
 * 4. Optimize the loop: calculate `maxLength = n - (k - path.length) + 1` to avoid unnecessary iterations (pruning).
 * 5. For each number `i` from `start` to `maxLength`, add `i` to `path`.
 * 6. Recursively call `backtrack(i + 1)` to build combinations with remaining elements.
 * 7. Backtrack by removing `i` from `path`.
 * 8. Call `backtrack(1)` and return all combinations in `ans`.
 */
var combine = function (n, k) {
    const ans = []
    const path = []

    function backtrack(start) {
        if(path.length === k){
            ans.push([...path])
            return;
        }

        const maxLength = n - (k - path.length)+1

        for(let i = start; i <= maxLength; i++){
            path.push(i)
            backtrack(i+1)
            path.pop()
        }
    }

    backtrack(1)
    return ans
}