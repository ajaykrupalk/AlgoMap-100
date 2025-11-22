/**
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * Approach:
 * 1. Define a helper function `isMirror(t1, t2)` that checks whether two subtrees are mirror images.
 * 2. If both `t1` and `t2` are `null`, return `true`.
 * 3. If exactly one of `t1` or `t2` is `null`, return `false`.
 * 4. If `t1.val !== t2.val`, return `false`.
 * 5. Recursively check `isMirror(t1.left, t2.right)` and `isMirror(t1.right, t2.left)`.
 * 6. Call `isMirror(root, root)` and return its result to determine symmetry.
 */
var isSymmetric = function (root) {
    function isMirror(t1, t2) {
        if (t1 === null && t2 === null) return true;
        if (t1 === null || t2 === null) return false;
        if (t1.val !== t2.val) return false;

        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }

    return isMirror(root, root);
}