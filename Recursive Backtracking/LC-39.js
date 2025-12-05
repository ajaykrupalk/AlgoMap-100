/**
 * Time Complexity: O(2^target) in the worst case, where min is the smallest candidate
 * Space Complexity: O(target) for the recursion depth
 * Approach:
 * 1. Initialize an empty result array `res` to store all valid combinations.
 * 2. Define a recursive backtracking function `backtrack(start, curSum, sol)` with three parameters: start index, current sum, and current combination.
 * 3. Base case: if `curSum === target`, add a copy of `sol` to the result and return.
 * 4. Pruning: if `curSum > target` or `start === candidates.length`, return to stop this branch.
 * 5. Explore two choices at each step:
 *    a. Skip the current candidate: call `backtrack(start + 1, curSum, sol)`.
 *    b. Include the current candidate: add it to `sol`, call `backtrack(start, curSum + candidates[start], sol)`, then backtrack by removing it.
 * 6. Call `backtrack(0, 0, [])` and return all combinations in `res`.
 */
var combinationSum = function(candidates, target){
    const res = []
    function backtrack(start,curSum,sol){
        if(curSum === target){
            res.push([...sol])
            return
        }

        if(curSum > target || start === candidates.length){
            return
        }

        backtrack(start+1,curSum,sol)

        sol.push(candidates[start])
        backtrack(start, curSum+candidates[start], sol)
        sol.pop()
    }
    backtrack(0,0,[])
    return res;
}