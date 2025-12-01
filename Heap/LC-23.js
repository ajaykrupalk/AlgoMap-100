/**
 * Time Complexity: O(N log k)
 * Space Complexity: O(k)
 * Approach:
 * 1. Create a min heap ordered by node value.
 * 2. Insert the head of each non-null list into the min heap.
 * 3. Create a dummy node to simplify list construction and initialize a current pointer.
 * 4. While the heap is not empty, dequeue the node with the smallest value.
 * 5. Append this node to the result list and advance the current pointer.
 * 6. If the dequeued node has a next node, enqueue it into the heap.
 * 7. Return the merged list starting from `dummy.next`.
 */
var mergeKLists = function(lists) {
    const minHeap = new MinPriorityQueue((node) => node.val)

    for(const node of lists){
        if(node){
            minHeap.enqueue(node)
        }
    }

    let dummy = { val: 0, next: null}
    let current = dummy;
    while(!minHeap.isEmpty()){
        const node = minHeap.dequeue()
        current.next = node;
        current = current.next;
        if(node.next){
            minHeap.enqueue(node.next)
        }
    }

    return dummy.next
}