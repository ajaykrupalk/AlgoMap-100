/**
 * Time Complexity: O(n!)
 * Space Complexity: O(n x n!)
 * Approach:
 * 1. Initialize an empty result array `ans`, a current permutation `sol`, and a `visited` array to track used elements.
 * 2. Define a recursive backtracking function `backtrack()` with no parameters.
 * 3. Base case: if `sol.length === nums.length`, add a copy of `sol` to the result and return.
 * 4. For each index `i` from 0 to `nums.length - 1`, skip if the element is already visited.
 * 5. Add `nums[i]` to `sol`, mark `visited[i] = true`, and recursively call `backtrack()`.
 * 6. Backtrack by removing the element from `sol` and setting `visited[i] = false`.
 * 7. Call `backtrack()` and return all permutations in `ans`.
 */
var permute = function (nums){
    const ans = []
    const sol = []
    const visited = Array(nums.length).fill(0)

    function backtrack(){
        if(sol.length === nums.length){
            ans.push([...sol]);
            return;
        }

        for(let i = 0; i < nums.length; i++){
            if(visited[i]) continue;

            sol.push(nums[i]);
            visited[i] = true;
            backtrack();
            sol.pop();
            visited[i] = false;
        }
    }

    backtrack()
    return ans
}