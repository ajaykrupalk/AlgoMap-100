/**
 * Time Complexity: O(n)
 * Space Complexity: O(1) 
 * Approach:
 * 1. Initialize pointer: Start with `current` at the head of the linked list.
 * 2. Traverse the list: Loop while `current` and `current.next` both exist (haven't reached the end).
 * 3. For each node in traversal:
 *    a. Compare values: Check if the current node's value equals the next node's value.
 *    b. Skip duplicate: If values match, remove the next node by setting `current.next = current.next.next`.
 *    c. Move forward: If values don't match, move `current` to the next node with `current = current.next`.
 * 4. Return result: After the loop ends, return the modified head of the list with all duplicates removed.
 */
var deleteDuplicates = function(head){
    let current = head;
    while(current && current.next){
        if(current.val === current.next.val){
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head
}