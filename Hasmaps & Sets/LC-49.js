/**
 * Time Complexity: O(NK)
 * Space Complexity: O(NK)
 * Approach:
 * 1. Iterate through each string and define an array of length 26
 * 2. For each character of that string, increement the counter in the index of the array
 * 3. Convert the array to a string
 * 4. If string not already present in the Map, then assign an empty array to it
 * 5. Else add it to the output
 * 6. Convert the map values to array and return it
 */
var groupAnagrams = function (strs) {
    const output = new Map()
    for(const s of strs) {
        const count = new Array(26).fill(0)
        for(let c of s){
            count[c.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        const key=count.join(",")
        if(!output.has(key)){
            output.set(key,[])
        }
        output.get(key).push(s)
    }
    return Array.from(output.values())
}

groupAnagrams(["eat"])