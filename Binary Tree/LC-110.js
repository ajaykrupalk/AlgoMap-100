/**
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * Approach:
 * 1. Define a helper function `checkHeight(node)` that computes the height and checks balance simultaneously.
 * 2. If `node` is `null`, return 0.
 * 3. Recursively compute the left subtree's height; if imbalance is detected (return -1), propagate early.
 * 4. Recursively compute the right subtree's height; if imbalance is detected, propagate early.
 * 5. If the absolute difference between `leftHeight` and `rightHeight` exceeds 1, return -1 to signal imbalance.
 * 6. Otherwise, return `1 + Math.max(leftHeight, rightHeight)` as the height of the current subtree.
 * 7. Call `checkHeight(root)` and return whether the result is not -1 (true = balanced).
 */
var isBalanced = function (root){
    function checkHeight(node) {
        if(!node) return 0;

        const leftHeight = checkHeight(node.left)
        if(leftHeight === -1) return -1

        const rightHeight = checkHeight(node.right)
        if(rightHeight === -1) return -1

        if(Math.abs(rightHeight-leftHeight) > 1) return -1

        return 1+Math.abs(leftHeight,rightHeight)
    }

    return checkHeight(root) !== -1
}