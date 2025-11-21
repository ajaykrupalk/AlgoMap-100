/**
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * Approach:
 * 1. Initialize `largestDiameter = 0` to track the maximum diameter found.
 * 2. Define a recursive height function `height(node)` that computes subtree height and updates the diameter.
 * 3. If `node` is `null`, return 0.
 * 4. Recursively compute the left subtree's height: `left = height(node.left)`.
 * 5. Recursively compute the right subtree's height: `right = height(node.right)`.
 * 6. Calculate the diameter passing through the current node as `diameter = left + right`.
 * 7. Update `largestDiameter = Math.max(largestDiameter, diameter)`.
 * 8. Return the height as `1 + Math.max(left, right)`.
 * 9. Call `height(root)` and return `largestDiameter`.
 */
var diameterOfBinary = function (root){
    let largestDiameter = 0;
    function height (node){
        if(!node) return 0

        const left = height(root.left)
        const right = height(root.right)
        const diameter = left+right

        largestDiameter = Math.max(largestDiameter,diameter)
        return 1+Math.max(left,right)
    }

    height(root)
    return largestDiameter
}