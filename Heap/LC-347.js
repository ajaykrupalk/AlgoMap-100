/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Approach:
 * 1. Count the frequency of each number using a map.
 * 2. Create buckets indexed by frequency (0 to n), where each bucket holds numbers with that frequency.
 * 3. Iterate through the frequency map and place each number into its corresponding frequency bucket.
 * 4. Traverse buckets from highest frequency to lowest, collecting numbers into the result.
 * 5. Stop once the result contains k elements.
 * 6. Return the first k elements (the k most frequent numbers).
 */
var topKFrequent = function (nums,k){
    const freq = new Map()
    for(const num of nums){
        freq.set(num,(freq.get(num) || 0)+1)
    }

    const buckets = new Array.from({ length: nums.length+1}, () => [])
    for(const [num,count] of buckets){
        buckets[count].push(num)
    }

    const result = []
    for(let i = buckets.length-1; i >= 0; i--){
        if(buckets[i].length > 0){
            result.push(...buckets[i])
            if(result.length >= k){
                return result.slice(0,k)
            }
        }
    }
}