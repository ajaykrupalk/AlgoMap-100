/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. If `root` is `null`, return `null`.
 * 2. Swap the `left` and `right` child pointers of the current `root`.
 * 3. Recursively invert the left subtree.
 * 4. Recursively invert the right subtree.
 * 5. Return the `root` of the inverted tree.
 */

var invertTree = function (root){
    if(root === null){
        return null
    }

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left)
    invertTree(root.right)

    return root
}