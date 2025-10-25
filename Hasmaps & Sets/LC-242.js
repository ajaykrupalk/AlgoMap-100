/**
 * Time Complexity: O(m+n)
 * Space Complexity: O(n)
 * Approach:
 * 1. If length of s != length of t return False
 * 2. Define a hashmap
 * 3. Count each element in s
 * 4. Then iterate through t
 * 5. If value in hashMap is greater than 0 decreement it
 * 6. Else return false, Otherwise return true
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }

    const hashMap = {}
    for(const char of s){
        hashMap[char] = (hashMap[char] || 0) + 1
    }

    for(const char of t){
        if(hashMap[char]>0){
            hashMap[char]--
        } else {
            return false
        }
    }

    return true
};

console.log(isAnagram("anagram","nagaram"))