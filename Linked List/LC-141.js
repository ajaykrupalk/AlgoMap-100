/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize two pointers `slow` and `fast`, both starting at the head of the list.
 * 2. While `fast` and `fast.next` are not null, move `fast` two steps (`fast = fast.next.next`) and `slow` one step (`slow = slow.next`).
 * 3. After each move, check if `slow === fast` (same node): if true, a cycle exists — return `true`.
 * 4. If `fast` or `fast.next` becomes null, the list ends with no cycle — return `false`.
 */
var hasCycle = function (head){
    let slow = fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true
        }
    }
    return false
}