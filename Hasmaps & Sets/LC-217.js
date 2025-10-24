/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach
 * 1. Define a set
 * 2. Check if element is already present in set return true
 * 3. If not present, add to the set
 * 4. If element is not repeated, return false
 */
var containsDuplicate = function(nums) {
    const seen = new Set()
    for(const num of nums){
        if(seen.has(num)){
            return true
        }
        seen.add(num)
    }

    return false
};

console.log(containsDuplicates([1,2,3,4]))