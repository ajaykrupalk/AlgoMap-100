/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Maintain two pointers at each ends
 * 2. Calculate the sum of the values at each pointers
 * 3. If equal return the pointer values+1
 * 4. If sum > target reduce right pointer
 * 5. Else increase left pointer
 * 6. If none satisfy return empty array
 */
var twoSum = function(numbers,target) {
    let l = 0, r=numbers.length-1;
    while(l<r){
        const sum = numbers[r]+numbers[l];
        if(sum === target){
            return [l+1,r+1]
        } else if(sum > target){
            r--
        } else {
            l++
        }
    }
    return []
}

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([2,3,4],6))
console.log(twoSum([-1,0],-1))