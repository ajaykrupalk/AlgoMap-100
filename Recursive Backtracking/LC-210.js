/**
 * Time Complexity: O(V + E)
 * Space Complexity: O(V + E)
 * Approach:
 * 1. Build a directed graph where an edge from prerequisites to course means "prerequisite must be taken before course"
 * 2. Calculate in-degree (number of prerequisites) for each course
 * 3. Use topological sort (Kahn's algorithm with BFS):
 *    a. Add all courses with 0 prerequisites to queue
 *    b. While queue is not empty:
 *       - Dequeue a course and add to result
 *       - For each dependent course, decrease its in-degree
 *       - If dependent course reaches 0 in-degree, enqueue it
 * 4. If all courses are in result, return it; otherwise, a cycle exists (return empty array)
 */

var findOrder = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses },()=>[])
    const indegree = Array(numCourses).fill(0)

    for(let [course,pre] of prerequisites){
        graph[pre].push(course)
        indegree[course]++
    }

    const queue = []
    for(let i = 0; i < numCourses; i++){
        if(indegree[i] === 0) queue.push(i)
    }

    const order = []
    while(queue.length>0){
        const curr = queue.shift()
        order.push(curr)

        for(let next of graph[curr]){
            indegree[next]--;
            if(indegree[next] === 0){
                queue.push(next)
            }
        }
    }

    return order.length === numCourses ? order : []
};