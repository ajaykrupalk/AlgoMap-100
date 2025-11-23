/**
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * Approach:
 * 1. Define a recursive helper `hasSum(node, curSum)` that carries the running sum from root to the current node.
 * 2. If `node` is `null`, return `false` (no path through a null node).
 * 3. Add the current node's value to `curSum`.
 * 4. If the node is a leaf, check whether `curSum === targetSum` and return the result.
 * 5. Otherwise, recursively check left and right children with the updated `curSum`; return true if either subtree has a valid path.
 * 6. Call `hasSum(root, 0)` and return its boolean result.
 */
var hashPathSum = function (root, targetSum) {
    function hasSum(node, curSum) {
        if (!node) return false;

        const newSum = curSum + node.val;

        if (node.left === null && node.right === null) {
            return newSum === targetSum;
        }

        return hasSum(node.left, newSum) || hasSum(node.right, newSum);
    }

    return hasSum(root, 0);
}