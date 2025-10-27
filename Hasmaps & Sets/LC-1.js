/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. Define a hashMap
 * 2. If the difference between target and current number exists
 * 3. Then, return the index of the difference and current number
 * 4. Else, keep setting the hashMap with the current number to the current index
 * 5. Else return []
 */

var twoSum = function (nums,target) {
    const hashMap = {}
    for(let i = 0; i < nums.length; i++){    
        const diff = target - nums[i]
        if(hashMap[diff]){
            return [hashMap[diff],i]
        }
        hashMap[nums[i]] = i
    }
    return []
}