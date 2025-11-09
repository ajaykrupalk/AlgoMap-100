/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize both `slow` and `fast` pointers at the head of the list.
 * 2. Traverse the list with the following loop while `fast` and `fast.next` are not null:
 *    a. Move `slow = slow.next` (one step).
 *    b. Move `fast = fast.next.next` (two steps).
 * 3. Once the loop ends, `slow` will be pointing to the middle node.
 * 4. Return `slow`.
 */
var middleNode = function(head) {
  let slow = fast = head;
  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
  }
  return slow 
};