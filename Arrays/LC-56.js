/**
 * Time Complexity: O(n log n)
 * Space Complexiry: O(n)
 * Approach:
 * Sort the intervals array by the start ranges
 * Iterate through each interval
 * Initialize an empty list for the merged ranges
 * If the merged list is empty or the last interval in merged list does not overlap
 * i.e. (merged[-1][1] < interval[0]) then push the current interval to the merged list
 * Else, update merged[-1][1] to the max of merged[-1][1] and interval[1]
 * Return the merged list
 */
var mergeIntervals = function (intervals){
    intervals.sort((a,b) => a[0] - b[0])

    const merged = []

    for(let interval of intervals){
        if(merged.length === 0 || merged[merged.length-1][1] < interval[0]){
            merged.push(interval)
        } else {
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], interval[1])
        }
    }

    console.log(merged)
}

mergeIntervals([[1,3],[2,6],[8,10],[15,18]])