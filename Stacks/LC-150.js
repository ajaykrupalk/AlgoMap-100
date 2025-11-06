/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. Initialize an empty stack.
 * 2. Iterate through each token in the input list:
 *    a. If the token is an operator:
 *       i. Pop the top two elements from the stack: first b, then a.
 *       ii. Evaluate a op b, where op is one of +, -, *, /.
 *       iii. Push the result back onto the stack.
 *    b. If the token is a number, convert it to an integer and push it onto the stack.
 * 3. At the end of the iteration, the stack will contain one element — the result of the expression.
 */
var evalRPN = function(tokens) {
    const stack = []
    for(const c of tokens){
        if(c === '+' || c==='/' || c==='*' || c==='-'){
            let b = stack.pop()
            let a = stack.pop()
            
            switch(c){
                case '+': stack.push(a+b)
                break;
                case '-': stack.push(a-b)
                break;
                case '/': 
                let division = a/b
                stack.push(division < 0 ? Math.ceil(division) : Math.floor(division))
                break;
                case '*': 
                stack.push(a*b)
                break
            }
        } else {
            stack.push(parseInt(c))
        }
    }

    return stack.pop()
};

evalRPN(["4", "13", "5", "/", "+"])