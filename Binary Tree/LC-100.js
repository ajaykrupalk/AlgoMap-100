/**
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * Approach:
 * 1. If both nodes `p` and `q` are `null`, return `true` (both trees empty).
 * 2. If exactly one of `p` or `q` is `null`, return `false` (structure differs).
 * 3. If `p.val !== q.val`, return `false` (values differ).
 * 4. Recursively compare left subtrees: `isSameTree(p.left, q.left)`.
 * 5. Recursively compare right subtrees: `isSameTree(p.right, q.right)`.
 * 6. Return `true` only if both recursive comparisons are `true`.
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}