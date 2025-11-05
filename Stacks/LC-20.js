/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. Create a dictionary that maps closing brackets to their matching opening brackets: {')': '(', ']': '[', '}': '{'}
 * 2. Initialize an empty stack.
 * 3. Loop through each character in the string:
 *    a. If the character is an opening bracket ('(', '{', '['), push it onto the stack.
 *    b. If it's a closing bracket, check if the stack is empty; if it is, return false (nothing to match).
 *    c. Otherwise, pop the top of the stack and ensure it matches the corresponding opening bracket from the dictionary; if it doesn’t match, return false.
 * 4. After processing all characters, return true only if the stack is empty (all brackets were matched).
 */
var isValid = function(s){
    const hashMap = { ']': '[', '}': '{', ')': '(' }
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        if(!(hashMap[s[i]])){
             arr.push(s[i])
        } else {
            if (arr.length === 0 || arr.pop() !== hashMap[s[i]]) {
                return false
            }
        }
    }
   
    return arr.length===0
}

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([])"))
console.log(isValid("([)]"))