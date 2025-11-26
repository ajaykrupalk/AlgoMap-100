/**
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * Approach:
 * 1. Initialize `minVal = Infinity` to track the smallest absolute difference found.
 * 2. Initialize `prev = null` to store the value of the previously visited node during in-order traversal.
 * 3. Define a recursive in-order traversal function `inOrder(node)` (left, root, right) because BST in-order gives sorted values.
 * 4. If `node` is `null`, return.
 * 5. Recursively traverse the left subtree.
 * 6. If `prev` is not `null`, compute the difference `node.val - prev` and update `minVal` to the minimum.
 * 7. Update `prev = node.val` to track the current node for the next iteration.
 * 8. Recursively traverse the right subtree.
 * 9. Return `minVal` as the minimum absolute difference between any two node values.
 */
var getMinimumDifference = function(root){
    let minVal = Infinity, prev = null;
    function inOrder(node){
        if(!node) return null

        inOrder(node.left)

        if(prev != null){
            minVal = Math.min(minVal, node.val - prev)
        }
        prev = node.val

        inOrder(node.right)
    }
    inOrder(root)
    return minVal
}