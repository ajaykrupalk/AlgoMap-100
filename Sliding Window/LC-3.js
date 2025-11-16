/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize variables: create an empty object `countS` to store each character and its most recent index, set `left = 0` (left pointer), and `maxLength = 0` to track the longest substring found.
 * 2. Handle edge cases: return 0 if string is empty, return 1 if string has only one character.
 * 3. Iterate with right pointer: move the right pointer through each character in the string from index 0 to end.
 * 4. Check for duplicate: if the current character `s[right]` already exists in `countS`, it means we have a repeated character in our current window.
 * 5. Move left pointer: when a duplicate is found, update `left` to be one position after the last occurrence of that character using `left = Math.max(left, countS[s[right]] + 1)`.
 * 6. Update character index: store or update the current character's index in `countS` with `countS[s[right]] = right`.
 * 7. Calculate window size: compute the current window size as `right - left + 1` and update `maxLength` if this is larger.
 * 8. Return result: after the loop completes, return `maxLength` as the length of the longest substring without repeating characters.
 */
var lengthOfLongestSubstring = function(s){
    const countS = {}
    let left = 0;
    let maxLength = 0;

    if(s.length === 0) return 0;
    if(s.length === 1) return 1;

    for(let right = 0; right < s.length; right++){
        if(s[right] in countS){
            left = Math.max(left,countS[s[right]]+1)
        }
        countS[s[right]] = right
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength;
}