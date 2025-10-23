/**
 * Time Complexity: O(n+m)
 * Space Complexity: O(m)
 * Approach:
 * 1. Create a set of the jewels
 * 2. Iterate through the stones
 * 3. If stone is part of jewelSet
 * 4. Increement the counter
 * 5. Return counter
 */

var numJewelsInStones = function (jewels, stones) {
    const jewelSet = new Set(jewels)
    let count = 0;
    for(const stone of stones){
        if(jewelSet.has(stone)){
            count++
        }
    }

    return count
}

numJewelsInStones("aA","aAAbbbb")
numJewelsInStones("z","ZZ")