/**
 * Time Complexity: O(n log k)
 * Space Complexity: O(k)
 * Approach:
 * 1. Create a min heap to maintain the k largest elements.
 * 2. Iterate through each number in the array.
 * 3. Push the current number into the min heap.
 * 4. If the heap size exceeds k, pop the smallest element (the minimum of the k largest).
 * 5. After processing all numbers, the heap contains exactly k largest elements.
 * 6. The root of the min heap is the k-th largest element; return it.
 */
const findKthLargest = function (nums, k) {
    const minHeap = new MinHeap()
    for(const num of nums){
        minHeap.push(num)
        if(minHeap.size() > k){
            minHeap.pop()
        }
    }
    return minHeap.pop()
}