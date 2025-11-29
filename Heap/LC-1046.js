/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 * Approach:
 * 1. Create a max heap and enqueue all stones by their weight.
 * 2. While the heap has more than one stone, repeatedly pop the two heaviest stones.
 * 3. If the two stones have different weights, enqueue the difference back into the heap.
 * 4. If the two stones have equal weight, both are destroyed and not re-enqueued.
 * 5. Continue until at most one stone remains.
 * 6. Return the weight of the last remaining stone, or 0 if no stones remain.
 */
var lastStoneWeight = function(stones) {
    const heap = new MaxHeap()
    for(const stone of stones){
        heap.enqueue(stone)
    }

    while(heap.size() > 1){
        const y = heap.pop()
        const x = heap.pop()
        if(y != x){
            heap.enqueue(y-x)
        }
    }

    return heap.size() === 0 ? 0 : heap.pop()
}