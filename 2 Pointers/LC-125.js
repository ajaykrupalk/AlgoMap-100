/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize L = 0 and R = s.length - 1.
 * 2. While L < R:
 * - If s[L] is not alphanumeric, increment L.
 * - If s[R] is not alphanumeric, decrement R.
 * - Compare lowercase(s[L]) and lowercase(s[R]). If they differ, return false.
 * - If they match, increment L and decrement R.
 * 3. If the loop completes without mismatches, return true.
 */
var isPalindrome = function(s) {
    let l = 0, r = s.length -1;
    while(l<r){
        while(l<r && !/[a-zA-Z0-9]/.test(s[l])) l++
        while(l<r && !/[a-zA-Z0-9]/.test(s[r])) r--

        if(s[l].toLowerCase() !== s[r].toLowerCase()){
            return false
        }

        l+=1
        r-=1
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("0P"))