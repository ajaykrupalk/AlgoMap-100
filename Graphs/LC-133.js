/**
 * Time Complexity: O(N + E) where N = number of nodes, E = number of edges
 * Space Complexity: O(N)
 * Approach: DFS with memoization using a HashMap
 * - Recursively traverse the graph and clone each node
 * - Use a map to store original→cloned node mapping to avoid duplicates and handle cycles
 * - When encountering a node already in the map, return its clone instead of creating a new one
 */
var cloneGraph = function(node) {
    if(!node) return null

    const map = new Map()

    function dfs(original){
        if(map.has(original)){
            return map.get(original)
        }

        const cloned = new Node(original.val)
        map.set(original,cloned)

        for(let neighbor of original.neighbors){
            cloned.neighbors.push(dfs(neighbor))
        }

        return cloned
    }

    return dfs(node)
};