/**
 * Time Complexity: O(V + E) where V is number of courses and E is number of prerequisites (edges); each course and prerequisite is visited once in DFS
 * Space Complexity: O(V + E) for the adjacency list (graph), states array (V), and recursion stack (up to V in worst case)
 * Approach:
 * 1. Build an adjacency list `graph` where each course maps to its prerequisite course(s).
 * 2. Define three states: `UNVISITED` (0) = not yet explored, `VISITING` (1) = currently exploring, `VISITED` (2) = fully explored.
 * 3. Initialize a `states` array with all courses set to `UNVISITED`.
 * 4. Define a DFS function `dfs(node)` to detect cycles in the prerequisite graph.
 * 5. If a course is in `VISITING` state when revisited, a cycle exists; return false (impossible to finish).
 * 6. If a course is in `VISITED` state, it has been fully explored with no cycle; return true.
 * 7. Mark the current course as `VISITING`, then recursively visit all its prerequisites.
 * 8. If any prerequisite returns false (cycle found), propagate false back.
 * 9. After exploring all prerequisites, mark the course as `VISITED` and return true.
 * 10. Iterate through all courses; if DFS on any course returns false, return false (cycle exists).
 * 11. If all courses pass DFS, return true (no cycle; all courses can be finished).
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(course)) {
      graph.set(course, []);
    }
    graph.get(course).push(prereq);
  }

  const UNVISITED = 0;
  const VISITING = 1;
  const VISITED = 2;

  const states = new Array(numCourses).fill(UNVISITED);

  function dfs(node) {
    if (states[node] === VISITING) return false;
    if (states[node] === VISITED) return true;

    states[node] = VISITING;
    if (graph.has(node)) {
      for (const neighbor of graph.get(node)) {
        if (!dfs(neighbor)) {
          return false;
        }
      }
    }

    states[node] = VISITED;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};

canFinish(2, [[1, 0]]);
