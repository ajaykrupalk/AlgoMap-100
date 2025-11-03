/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * Approach:
 * 1. Sort the input array nums in ascending order.
 * 2. Iterate over the array with index i from 0 to nums.length - 3.
 * 3. For each nums[i], skip it if it's the same as the previous number to avoid duplicates.
 * 4. Initialize two pointers: left = i + 1 and right = nums.length - 1.
 * 5. While left < right:
 *    a. Compute the sum: total = nums[i] + nums[left] + nums[right].
 *    b. If total == 0, record the triplet, then increment left and decrement right, skipping duplicates.
 *    c. If total < 0, increment left to increase the sum.
 *    d. If total > 0, decrement right to decrease the sum.
 */
var threeSum = function (nums) {
    nums.sort((a,b)=>a-b);
    const output = [];
    let l = 0, r = nums.length -1;
    for(let i = 0; i < nums.length-1; i++){
        if(nums[i]>0){
            break;
        }

        if(i>0 && nums[i]===nums[i-1]){
            continue
        }

        l = i+1, r = nums.length-1
        while(l<r){
            let sum = nums[i]+nums[l]+nums[r]
            if(sum==0){
                output.push([nums[i],nums[l],nums[r]])
                l+=1
                r-=1
                while(l<r && nums[l] === nums[l-1]) l++
                while(l<r && nums[r] === nums[r+1]) r--
            } else if(sum>0){
                r--
            } else {
                l++
            }
        }
    }
    return output
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))
console.log(threeSum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]))