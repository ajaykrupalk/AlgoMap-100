/**
 * Time Complexity: O((V + E) log V) - process each vertex once, each edge examined once, heap ops are O(log V)
 * Space Complexity: O(V + E) - graph adjacency list + distance map + heap
 * Approach:
 * 1. Build adjacency list from edge list
 * 2. Initialize min heap with source node (distance 0)
 * 3. While heap not empty: dequeue min distance node, relax all neighbor edges
 * 4. If neighbor found with shorter path, update distance and enqueue
 * 5. Return max distance among all reached nodes (bottleneck), or -1 if unreachable
 */
const networkDelayTime = function (times,n,k) {
    const graph = new Map()

    for(const [u,v,time] of times){
        if(!graph.has(u)) graph.set(u,[])
        graph.get(u).push([v,time])
    }

    const minHeap = new MinPriorityQueue()
    minHeap.enqueue(k,0)

    const dist = new Map()
    dist.set(k,0)

    while(!minHeap.isEmpty()){
        const node = minHeap.dequeue();

        const currentTime = dist.get(node)

        if(!graph.has(node)) continue;

        for(const [neighbor,time] of graph.get(node)){
            const newTime = currentTime+time

            if(!dist.has(neighbor) || newTime < dist.get(neighbor)){
                dist.set(neighbor, newTime)
                minHeap.enqueue(neighbor, newTime)
            }
        }
    }

    if(dist.size !== n) return -1

    let maxTime = 0;
    for(const t of dist.values()){
        maxTime = Math.max(maxTime, t);
    }

    return maxTime
}