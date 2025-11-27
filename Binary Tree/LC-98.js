/**
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * Approach:
 * 1. Use recursion with a valid range `(min, max)` for each node's allowed values.
 * 2. If `node` is `null`, return `true` (empty subtree is valid).
 * 3. If `node.val <= min` or `node.val >= max`, return `false`.
 * 4. Recursively validate the left subtree with range `(min, node.val)`.
 * 5. Recursively validate the right subtree with range `(node.val, max)`.
 * 6. Call the helper on `root` with initial range `(-Infinity, Infinity)` and return its result.
 */
function isValidBST(root){
    function isValid(node, min, max) {
        if (!node) return true;

        if (node.val <= min || node.val >= max) return false;

        return isValid(node.left, min, node.val) && isValid(node.right, node.val, max);
    }

    return isValid(root, -Infinity, Infinity);
}