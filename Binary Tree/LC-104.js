/**
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * Approach:
 * 1. If `root` is `null`, return 0 as the depth of an empty tree.
 * 2. Recursively compute the depth of the left subtree: `left = maxDepth(root.left)`.
 * 3. Recursively compute the depth of the right subtree: `right = maxDepth(root.right)`.
 * 4. Return `1 + Math.max(left, right)` to account for the current node.
 */
var maxDepth = function (root){
    if(root === null) return 0

    const left = maxDepth(root.left)
    const right = maxDepth(root.right)

    return 1+Math.max(left,right)
}