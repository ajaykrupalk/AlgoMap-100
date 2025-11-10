/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. If the head is null, return null.
 * 2. Create an empty dictionary `oldToNew` to store mappings from original nodes to copied nodes.
 * 3. First pass: traverse the original list and create a copy of each node with the same value; store these in `oldToNew`.
 * 4. Second pass: traverse the list again to assign `next` and `random` pointers for each copied node using `oldToNew`:
 *    a. `copy.next = oldToNew[original.next]` (or null if no mapping).
 *    b. `copy.random = oldToNew[original.random]` (or null if no mapping).
 * 5. Return `oldToNew[head]` as the new head of the deep-copied list.
 */
var copyRandomList = function(head) {
    if(!head) return null;

    let current = head;
    const oldToNew = new Map();
    while(current){
        oldToNew.set(current, new Node(current.value))
        current = current.next;
    }

    current = head;
    while(current){
        const newNode = oldToNew.get(current);
        newNode.next = oldToNew.get(current.next) || null;
        newNode.random = oldToNew.get(current.random) || null;

        current = current.next;
    }

    return oldToNew.get(head);
}