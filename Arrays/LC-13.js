/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * Define a object with roman to integer mapping
 * If the current index is < length-1 and is less than the next character
 * Subtract the value of next character and current character and add to sum
 * Else, add the value of the current character to the sum
 */

var romanToInt = function (s) {
  const romanIntMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0, i = 0;
  while(i < s.length){
    if(i < s.length - 1 && romanIntMap[s[i]] < romanIntMap[s[i+1]]){
        sum += romanIntMap[s[i+1]] - romanIntMap[s[i]]
        i += 2
    } else {
        sum += romanIntMap[s[i]]
        i += 1
    }
  }

  console.log(sum)
};

romanToInt("MCMXCIV");
romanToInt("III");
romanToInt("LVIII");
