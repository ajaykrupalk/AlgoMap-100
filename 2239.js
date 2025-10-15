/* 
* Leetcode - Find Closest Number to 0
* Time Complexity - O(n)
* Space Complexity - O(1)
* Approach: 
** Check if the absolute value of a number is less than the closest. If so, consider that the closest.
** Else, if the absolute value is equal to the closest, then get the max of the number and the closest.
*/
var findClosestNumber = function (nums) {
    let closest = nums[0];
    for(let num of nums){
        if(Math.abs(num) < Math.abs(closest)){
            closest = num
        } else if(Math.abs(num) === Math.abs(closest)){
            closest = Math.max(num,closest)
        }
    }
    console.log(closest)
}

findClosestNumber([-4,-2,1,4,8])