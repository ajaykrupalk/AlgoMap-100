/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * Two Pointers: 
 * Left Pointer is to mark where the next non-zero element should go
 * Right Pointer is to traverse the array
 * If right pointer is a non-zero element, swap the elements
 * Increement left pointer by 1
 */
var moveZeros = function(nums) {
    let l = 0;
    for(let r = 0; r < nums.length; r++){
        if(nums[r]!=0){
            [nums[r],nums[l]]=[nums[l],nums[r]]
            l+=1
        }
    }

    console.log(nums)
};

moveZeros([0,1,0,3,12])