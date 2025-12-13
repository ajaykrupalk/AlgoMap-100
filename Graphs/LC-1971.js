/**
 * Time Complexity: O(V + E) where V is number of vertices (nodes) and E is number of edges; each vertex and edge is visited once in DFS
 * Space Complexity: O(V + E) for the adjacency list (graph) and the `seen` set (up to V nodes) and stack (up to V nodes in worst case)
 * Approach:
 * 1. Handle edge case: if `source === destination`, a path exists trivially; return true.
 * 2. Build an adjacency list `graph` from the edges array where each edge (u, v) creates bidirectional connections.
 * 3. Initialize a `seen` Set to track visited nodes and avoid revisiting.
 * 4. Initialize a `stack` with the `source` node and mark it as seen.
 * 5. Perform iterative DFS: while the stack is not empty, pop the top node.
 * 6. If the current node equals `destination`, a path has been found; return true.
 * 7. For each unvisited neighbor of the current node, mark it as seen and push it onto the stack.
 * 8. If the loop completes without finding the destination, return false (no path exists).
 */
var validPath = function(n,edges,source,destination){
    if(source === destination) return true

    const graph = new Map()
    for(const [u,v] of edges){
        if(!graph.has(u)) graph.set(u,[])
        if(!graph.has(v)) graph.set(v,[])

        graph.get(u).push(v)
        graph.get(v).push(u)
    }

    const seen = new Set()
    const stack = [source]
    seen.add(source)

    while(stack.length > 0){
        const node = stack.pop()
        if(node === destination) return true

        for(const neighbor of graph.get(node) || []){
            if(!seen.has(neighbor)){
                seen.add(neighbor)
                stack.push(neighbor)
            }
        }
    }

    return false
}