/*
 * Time Complexity: O(max(m,n))
 * Space Complexity: O(m+n)
 */

var mergeAlternately = function (word1, word2) {
  let p1 = 0,
    p2 = 0;
  const output = [];

  while (p1 < word1.length && p2 < word2.length) {
    output.push(word1[p1++]);
    output.push(word2[p2++]);
  }

  while (p1 < word1.length) {
    output.push(word1[p1++]);
  }

  while (p2 < word2.length) {
    output.push(word2[p2++]);
  }

  console.log(output.join(""))
};

mergeAlternately("ab", "pqrs");
