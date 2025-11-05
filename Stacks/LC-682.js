/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. Initialize an empty stack scores.
 * 2. Loop through each operation in the input list:
 *    a. If the operation is "+", compute the sum of the last two elements and push it onto the stack.
 *    b. If the operation is "D", double the last score and push it onto the stack.
 *    c. If the operation is "C", remove the last score by popping from the stack.
 *    d. If it's a numeric string, convert it to an integer and push it onto the stack.
 * 3. Once all operations are complete, sum all values in the stack to get the total score.
 */
var calPoints = function (operations) {
    const record = [];
    let total = 0;
    for (let i = 0; i < operations.length; i++) {
        const c = operations[i]
        switch (c) {
            case 'C': record.pop()
                break;
            case 'D': record.push(parseInt(record[record.length - 1] * 2))
                break;
            case '+': record.push(parseInt(record[record.length - 1]) + parseInt(record[record.length - 2]))
                break;
            default: record.push(parseInt(c));
                break
        }
    }
    return record.reduce((acc,val) => acc+val,0)
};