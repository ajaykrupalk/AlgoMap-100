/**
 * Time Complexity: O(n) 
 * Space Complexity: O(1)
 * Approach:
 * 1. Initial two pointer at each ends of the array
 * 2. Iterate until left < right
 * 3. Swap the elements in-place at the pointers
 * 4. Adjust the pointers
 * 5. Return the original array
 */
var reverseString = function (s){
    let l = 0, r = s.length -1;
    while(l<r){
        [s[l],s[r]]=[s[r],s[l]]
        l++;
        r--
    }
    return s
}

reverseString(["h","e","l","l","o"])