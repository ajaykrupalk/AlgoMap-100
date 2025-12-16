/**
 * Time Complexity: O(n²) - outer loop runs n times, inner loops scan n points
 * Space Complexity: O(n) - visited and minCost arrays
 * Approach:
 * 1. Start with point 0, mark it as the root with cost 0
 * 2. For each of n iterations:
 *    a. Find the unvisited point with minimum cost
 *    b. Mark it as visited and add its cost to total
 *    c. For all unvisited neighbors, update their minimum cost if we found a cheaper path
 * 3. Return the total cost of all edges added
 */
var minCostConnectPoints = function (points) {
    const n = points.length;
    const visited = new Array(n).fill(false)
    const minCost = new Array(n).fill(Infinity)

    minCost[0] = 0;
    let totalCost = 0;

    for(let i = 0; i <n; i++){
        let u = -1;
        for(let j = 0; j < n; j++){
            if(!visited[j] && (u === -1 || minCost[j] < minCost[u])){
                u = j;
            }
        }

        visited[u] = true;
        totalCost += minCost[u]

        for(let v = 0; v < n; v++){
            if(!visited[v]){
                const distance = Math.abs(points[u][0] - points[v][0]) +
                    Math.abs(points[u][1] - points[v][1]);
                minCost[v] = Math.min(minCost[v],distance)
            }
        }
    }

    return totalCost
}