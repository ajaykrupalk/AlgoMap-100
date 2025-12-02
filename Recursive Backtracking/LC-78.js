/**
 * Time Complexity: O(2^n * n)
 * Space Complexity: O(2^n * n)
 * Approach:
 * 1. Initialize an empty result array `res` to store all subsets and a current subset `sol`.
 * 2. Define a recursive backtracking function `backtrack(start)` that explores all subsets starting from index `start`.
 * 3. At each step, add a copy of the current subset `sol` to the result (this is one subset).
 * 4. For each element from `start` to the end of `nums`, include that element in `sol`.
 * 5. Recursively call `backtrack(i+1)` to explore subsets that include this element.
 * 6. Backtrack by removing the element from `sol` (pop operation).
 * 7. Call `backtrack(0)` to start from the beginning and return all subsets in `res`.
 */
var subsets = function (nums){
    const res = []
    const sol = []

    function backtrack(start){
        res.push([...sol])
        for(let i = start; i < nums.length; i++){
            sol.push(nums[i])
            backtrack(i+1)
            sol.pop()
        }
    }

    backtrack(0)
    return res;
}