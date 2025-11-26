/**
 * Time Complexity: O(h + k) on average
 * Space Complexity: O(h)
 * Approach:
 * 1. Perform an in-order traversal (left, root, right) because it yields BST values in sorted order.
 * 2. Maintain a counter that increments when visiting a node; when the counter equals `k`, record the node's value.
 * 3. Use early termination: once the k-th node is found, propagate a true value up the recursion to stop further work.
 * 4. Return the recorded value after traversal completes.
 */
var kthSmallest = function(root, k) {
    let result = null;
    let count = 0;

    function inOrder(node) {
        if (!node) return false;

        if (inOrder(node.left)) return true;

        count++;
        if(count === k){
            result = node.val;
            return true;
        }

        return inOrder(node.right);
    }

    inOrder(root);
    return result;
}