/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize variables: set `left = 0`, `maxLength = 0`, `maxFreq = 0`, and an object `charCount` to track character frequencies.
 * 2. Iterate `right` from 0 to n-1 and increment `charCount[s[right]]` for the new character.
 * 3. Update `maxFreq` to the highest frequency seen in the current window.
 * 4. If replacements needed `(right - left + 1) - maxFreq` exceeds `k`, shrink the window by decrementing `charCount[s[left]]` and incrementing `left` until it no longer does.
 * 5. After adjusting, update `maxLength = Math.max(maxLength, right - left + 1)`.
 * 6. Return `maxLength` after the loop completes.
 */
var characterReplacement = function (s,k){
    const charCountS = {};
    let left = 0, maxLength = 0, maxFreq = 0;
    for(let right = 0; right < s.length; right++){
        const char = s[right];
        charCountS[char] = (charCountS[char] || 0)+1;
        maxFreq = Math.max(maxFreq, charCountS[char])
        if((right-left+1)-maxFreq > k){
            charCountS[s[left]]--
            left++
        }
        maxLength = Math.max(maxLength, right-left+1)
    }
    return maxLength
}