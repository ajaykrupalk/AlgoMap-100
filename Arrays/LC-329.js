/**
 * Time Complexity: O(t)
 * Space Complexity: O(1)
 * Approach:
 * Maintain two pointers, one each for s and t
 * If the value at s and value of t match increase the first pointer
 * The seconder pointer in t, keeps increementing until it reaches the last element
 * Return if p1 = s.length
 */

const isSubsequence = function (s,t) {
    let p1 = 0, p2 = 0;
    while(p1 < s.length && p2 < t.length){
        if(s[p1] === t[p1]){
            p1++;
        }

        p2++
    }

    console.log(p1 === s.length)
}

isSubsequence("ace","abcde")