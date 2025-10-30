/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. Convert the input array into a set to eliminate duplicates and allow constant-time lookups.
 * 2. Initialize a variable longest to track the length of the longest sequence found.
 * 3. Loop through each number num in the set:
 * 4. Only start a sequence from num if num - 1 is not in the set. This ensures we only begin from the beginning of a potential sequence.
 * 5. Initialize currentLength = 1 and currentNum = num + 1.
 * 6. While currentNum is in the set, increment currentLength and currentNum.
 * 7. Update longest to the maximum of itself and currentLength.
 * 8. After the loop, return longest.
 */

var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let longest = 0;
    for(const num of set){
        if(!set.has(num-1)){
            let length = 1;
            let nextNum = num+1
            while(set.has(nextNum)){
                length++
                nextNum
            }
        }
        longest = Math.max(length,longest)
    }
    return longest;
};

longestConsecutive([100,4,200,1,3,2])
longestConsecutive([0,3,7,2,5,8,4,6,0,1])
longestConsecutive([1,0,1,2])