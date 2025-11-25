/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. If `root` is `null`, return `[]` (empty result).
 * 2. Initialize a `queue` with the root node.
 * 3. Initialize an empty result array `ans` to store level-wise node values.
 * 4. While the `queue` is not empty, process the current level.
 * 5. Create a `level` array to store node values for the current level.
 * 6. Store the current queue length (number of nodes at this level).
 * 7. For each node at the current level, dequeue it, add its value to `level`, and enqueue its children.
 * 8. After processing all nodes at a level, append `level` to `ans`.
 * 9. Repeat until the queue is empty.
 * 10. Return the result array `ans`.
 */
var levelOrder = function (root){
    if(!root) return null;

    const ans = [];
    const queue = [root]
    while(queue.length > 0){
        const level = []
        for(let i = 0; i < queue.length; i++){
            const node = queue.shift()
            level.push(node.val)

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        ans.push(level)
    }
    return ans
}