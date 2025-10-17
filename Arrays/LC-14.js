/**
 * Time Complexity: O(n*m)
 * Space Complexity: O(1)
 * Approach:
 * Find the minLength of all the strings,
 * so as to process characters only minLength times.
 * Iterate index until minLength times.
 * Against the first word, check each character of the other strings
 * When it doesn't match, return the substring from 0 until the length it didn't match.
 */
var longestCommonPrefix = function (strs) {
  let minLength = Infinity;
  for (const str of strs) {
    minLength = Math.min(minLength, str.length);
  }

  let i = 0;
  while(i < minLength){
    for(const s of strs) {
        if(s[i] !== strs[0][i]){
            return strs[0].substring(0,i)
        }
    }
    i++;
  }

  return strs[0].substring(0,i)
};

longestCommonPrefix(["flower","flow","flight"]) //fl
longestCommonPrefix(["dog","racecar","car"]) //""
longestCommonPrefix(["cir","car"]) //c
longestCommonPrefix(["aaa","aa","aaa"]) // aa
longestCommonPrefix(["reflower", "flow", "flight"]); //""
