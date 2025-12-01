/**
 * Time Complexity: O(n log k)
 * Space Complexity: O(k)
 * Approach:
 * 1. Create a max heap ordered by squared distance from the origin.
 * 2. For each point, compute its squared distance `x*x + y*y`.
 * 3. Enqueue the point with its distance into the max heap.
 * 4. If the heap size exceeds k, dequeue the point with the maximum distance (farthest point).
 * 5. After processing all points, the heap contains the k closest points.
 * 6. Extract points from the heap and return them as the result.
 */
var kClosest = function (points, k) {
    const maxHeap = new MaxPriorityQueue(point => point.dist)

    for(const [x,y] of points){
        const dist = x*x+y*y;

        maxHeap.enqueue({ point: [x,y], dist })
        if(maxHeap.size() > k){
            maxHeap.dequeue()
        }
    }

    return maxHeap.toArray().map(item => item.point)
}