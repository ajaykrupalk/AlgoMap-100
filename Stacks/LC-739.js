/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. Initialize an array answer of the same length as the input, filled with 0.
 * 2. Initialize an empty stack that will store indices of the temperature array.
 * 3. Loop through the temperature array using index i
 * 4. While the stack is not empty and temperatures[i] > temperatures[stack[top]]:
 *    - Pop the index from the stack.
 *    - Calculate the number of days waited: i - popped_index.
 *    - Set answer[popped_index] to that value.
 * 5. Push the current index i onto the stack.
 * 6. After the loop, any indices remaining in the stack have no warmer future day, so their entries remain 0.
 * 7. Return the answer array.
 */
var dailyTemperatures = function (temperatures){
    const n = temperatures.length
    const answer = new Array(n).fill(0)
    const stack = []

    for(let i=0;i<temperatures.length;i++){
        const t = temperatures[i]
        while(stack.length>0 && stack[stack.length-1][0] < t){
            const [stackT, stackI] = stack.pop()
            answer[stackI] = i - stackI
        }
        stack.push([t,i])
    }

    return answer
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))