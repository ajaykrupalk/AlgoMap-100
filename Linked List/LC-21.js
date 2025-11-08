/**
 * Time Complexity: O(n+m)
 * Space Complexity: O(1)
 * Approach:
 * 1. Create a dummy node that will serve as the placeholder for the merged list.
 * 2. Initialize a `current` pointer pointing to the dummy node.
 * 3. While both `list1` and `list2` are non-null:
 *    a. Compare the values of `list1` and `list2`.
 *    b. Attach the node with the smaller value to `current.next`.
 *    c. Move `current` forward and advance the list from which the node was taken.
 * 4. After the loop, at most one list will have nodes remaining; attach the remaining nodes to `current.next`.
 * 5. Return `dummy.next` as the head of the merged list.
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(0);
    const current = dummy
    
    while(list1 && list2){
        if(list1.val < list2.val){
            current.next = list1;
            list1 = list1.next
        } else {
            current.next = list2;
            list2 = list2.next
        }
        current = current.next
    }

    current.next = list1 ? list1 : list2

    return dummy.next
}

mergeTwoLists([1,2,4],[1,3,4])