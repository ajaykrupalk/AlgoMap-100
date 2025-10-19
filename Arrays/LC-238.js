/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * Two passes
 * First pass to calculate prefix and save it to result
 * Second pass to calulate prefix, with result and nums
 * Return result
 */
var productOfArrayExceptSelf = function (nums) {

    let prefix = 1;
    let postfix = 1;
    const n = nums.length
    const result = new Array(n);
    for(let i = 0;i<n;i++){
        result[i] = prefix;
        prefix *= nums[i]
    }

    for(let i = n-1; i >= 0; i--){
        result[i] *= postfix;
        postfix *= nums[i]
    }

    console.log(result)
}

productOfArrayExceptSelf([1,2,3,4])
productOfArrayExceptSelf([-1,1,0,-3,3])