/**
 * Time Complexity: O(n2)
 * Space Complexity: O(n2)
 * Approach:
 * 1. If `s1.length > s2.length` return `false` immediately.
 * 2. Initialize two frequency arrays `s1Counts` and `s2Counts` of length 26 (for 'a'..'z').
 * 3. Populate `s1Counts` and `s2Counts` with the first `n1` characters.
 * 4. If `s1Counts` equals `s2Counts` return `true`.
 * 5. Slide a window over `s2` from index `n1` to `n2 - 1`: increment the count for the incoming character and decrement for the outgoing character.
 * 6. After each slide, compare `s1Counts` and `s2Counts`; if equal return `true`.
 * 7. If no permutation match is found, return `false`.
 */
var checkInclusion = function (s1, s2) {
  const n1 = s1.length;
  const n2 = s2.length;

  if (n1 > n2) return false;

  const s1Counts = Array(26).fill(0);
  const s2Counts = Array(26).fill(0);

  for (let i = 0; i < n1; i++) {
    s1Counts[s1.charCodeAt(i) - 97]++;
    s2Counts[s2.charCodeAt(i) - 97]++;
  } 

  if (s1Counts.every((val, index) => val === s2Counts[index])) return true;

  for (let i = n1; i < n2; i++) {
    s2Counts[s2.charCodeAt(i) - 97]++;
    s2Counts[s2.charCodeAt(i - n1) - 97]--;
    if (s1Counts.every((val, index) => val === s2Counts[index])) return true;
  }

  return false;
};

console.log(checkInclusion("abc", "leceebac"));
