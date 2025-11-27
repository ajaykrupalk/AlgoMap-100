/**
 * Time Complexity: O(h)
 * Space Complexity: O(1)
 * Approach:
 * 1. Start at the root node; initialize `lca` to root.
 * 2. Iterate while the current node is not null.
 * 3. If both `p.val` and `q.val` are greater than `node.val`, move right (both values are in the right subtree).
 * 4. If both `p.val` and `q.val` are less than `node.val`, move left (both values are in the left subtree).
 * 5. Otherwise, the current node is the lowest common ancestor (either `p.val` and `q.val` are on opposite sides, or one equals `node.val`).
 * 6. Set `lca = node` and break; return `lca`.
 */
var lowestCommonAncestor = function (root,p,q){
    let lca = root;

    while(root!==null){
        if(p.val > root.val && q.val > root.val){
            root = root.right
        } else if(p.val < root.val && q.val < root.val){
            root = root.left
        } else {
            lca = root
            break
        }
    }
    
    return lca
}