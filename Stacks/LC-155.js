/**
 * Time Complexity: O(1)
 * Space Complexity: O(n)
 * Approach:
 * 1. Initialize two stacks:
 *    a. `stk`: stores all values.
 *    b. `min_stk`: stores the minimum value at each level.
 * 2. `push(val)`:
 *    a. Push `val` onto `stk`.
 *    b. If `min_stk` is empty or `val <= min_stk[min_stk.length-1]`, push `val` onto `min_stk`; otherwise push `min_stk[min_stk.length-1]` again to preserve the previous minimum.
 * 3. `pop()`: Pop from both `stk` and `min_stk` to keep stacks aligned.
 * 4. `top()`: Return the top element of `stk`.
 * 5. `getMin()`: Return the top element of `min_stk`.
 */
var Minstack = function(){
    this.stack = []
    this.minStack = []
}

Minstack.prototype.push = function (val){
    this.stack.push(val)
    if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length-1]){
        this.minStack.push(val)
    } else {
        this.minStack.push(this.minStack[this.minStack.length-1])
    }
}

Minstack.prototype.pop = function (){
    this.stack.pop()
    this.minStack.pop()
}

Minstack.prototype.top = function (){
    return this.stack[this.stack.length-1]
}

Minstack.prototype.getMin = function (){
    return this.stack[this.minStack.length-1]
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */