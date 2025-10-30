/**
 Time Complexity: O(n)
 Space Complexity: O(1)
 Approach:
 1. Initialize candidate to nums[0] and count to 0.
 2. Iterate through each number in nums.
 3. If count is 0, set candidate to the current number.
 4. Increment count if the current number equals candidate; otherwise, decrement count.
 5. Return candidate, as it is guaranteed to be the majority element
 */
var majorityElement = function (nums) {
    let candidate = 0, count = 0;
    for(const num of nums){
        if(count === 0){
            candidate = num
        }
        count += candidate === num ? 1 : -1;
    }

    return count
}

majorityElement([2,2,1,1,1,2,2])