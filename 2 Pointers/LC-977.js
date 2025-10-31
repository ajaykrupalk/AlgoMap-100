/**
 * Time Complexity: O(n)
 * Space Complexity: O(n) 
 * Approach:
 * 1. Initialize two pointers: left = 0, right = nums.length - 1.
 * 2. Create a result array of the same size, filled with zeroes.
 * 3. While left <= right:
 * - If Math.abs(nums[left]) > Math.abs(nums[right]), set result[pos] = nums[left] ** 2 and increment left.
 * - Else, set result[pos] = nums[right] ** 2 and decrement right.
 * - Decrement pos.
 * 4. Return the result array.
 */
var sortedSquares = function(nums) {
    const output = [];
    let l = 0,r=nums.length-1;
    while(l<=r){
        if(Math.abs(nums[r])>Math.abs(nums[l])){
            output.push(Math.pow(nums[r],2))
            r--
        } else {
            output.push(Math.pow(nums[l],2))
            l++
        }
    }
    return output.reverse()
};

console.log(sortedSquares([-4,-1,0,3,10]))