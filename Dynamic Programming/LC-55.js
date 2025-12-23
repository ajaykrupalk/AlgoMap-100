/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. We maintain a variable maxReach to keep track of the farthest index we can reach.
 * 2. We iterate through the array, and for each index, we check if it is reachable.
 * 3. If it is reachable, we update maxReach to be the maximum of its current value and the sum of the current index and the jump length at that index.
 * 4. If at any point maxReach reaches or exceeds the last index, we return true.
 * 5. If we finish iterating through the array and haven't reached the last index, we return false.
 */
var canJump = function (nums) {
    let maxReach = 0;
    for(let i = 0; i < nums.length; i++){
        if(i>maxReach) return false;

        maxReach = Math.max(maxReach, i + nums[i]);

        if(maxReach >= nums.length - 1) return true;
    }
    return false;
}