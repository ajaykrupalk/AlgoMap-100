/**
 * Time Complexity: O(m*n)
 * Space Complexity: O(h)
 * Approach:
 * 1. Define a helper `isSameTree(p, q)` to check if two trees are structurally identical with same values.
 * 2. In `isSameTree`: if both `p` and `q` are `null`, return `true`.
 * 3. If exactly one of `p` or `q` is `null`, return `false`.
 * 4. If `p.val !== q.val`, return `false`.
 * 5. Recursively check if both left and right subtrees are identical.
 * 6. Define a helper `hasSubTree(root, subRoot)` to check if `subRoot` is a subtree of `root`.
 * 7. If `root` is `null`, return `false`.
 * 8. If `isSameTree(root, subRoot)` is `true`, return `true`.
 * 9. Recursively check left and right children of `root`.
 * 10. Call `hasSubTree(root, subRoot)` and return the result.
 */
var isSubtree = function (root, subRoot){
    function isSameTree(p,q) {
        if(!p && !q) return true
        if(!p || !q) return false
        if(p.val !== q.val) return false

        return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
    }

    function hasSubTree(root,subRoot){
        if(!root) return false
        if(isSameTree(root,subRoot)) return true
        return hasSubTree(root.left, subRoot) || hasSubTree(root.right, subRoot)
    }

    return hasSubTree(root,subRoot)
}