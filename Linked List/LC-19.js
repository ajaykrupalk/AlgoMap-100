/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Create a dummy node that points to the head of the list.
 * 2. Initialize two pointers: `ahead` and `behind`, both pointing to `dummy`.
 * 3. Move `ahead` n + 1 steps forward to create a gap of n between `ahead` and `behind`.
 * 4. While `ahead` is not null:
 *    a. Move both pointers one step at a time (`ahead = ahead.next`, `behind = behind.next`).
 *    After the loop, `behind` points to the node just before the one we want to remove.
 * 5. Remove the node by setting `behind.next = behind.next.next` and return `dummy.next` as the new head of the list.
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head;
    let ahead = behind = dummy;
    for(let i = 0; i<=n; i++){
        ahead = ahead.next
    }
    while(ahead){
        behind = behind.next;
        ahead = ahead.next;
    }
    behind.next = behind.next.next
    
    return dummy.next;
}