/**
 * Time Complexity: O(m+n)
 * Space Complexity: O(n)
 * Approach:
 * 1. Define a hashmap
 * 2. Count each element in magazine
 * 3. Then iterate through ransomNote
 * 4. If value in hashMap is greater than 0 increement it
 * 5. Else return false, Otherwise return true
 */
var ransomNote = function (ransomNote, magazine) {
    const hashMap = {};

    for(let char of magazine){
        hashMap[char] = (hashMap[char] || 0) + 1;
    }

    for(let char of ransomNote){
        if(hashMap[char]>0){
            hashMap[char]--;
        } else {
            return false
        }
    }

    return true
}

console.log(ransomNote("a","b"));
console.log(ransomNote("aa","ab"));
console.log(ransomNote("aa","aab"));
console.log(ransomNote("bg","efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));