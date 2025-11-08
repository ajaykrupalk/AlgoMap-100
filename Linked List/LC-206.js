/**
 * Time Complexity: O(n)
 * Space Complexity: O(1) 
 * Approach:
 * 1. Set curr = head and prev = none
 * 2. While curr is not None
 *  a. Store the next value in a temp variable
 *  b. Point the current value to prev
 *  c. Move prev to cur
 *  d. Move cur to temp(the next value)
 * 3. When the loop ends, prev will point to the new head of the reversed list
 * 4. Return prev
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr){
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }
    return prev
};