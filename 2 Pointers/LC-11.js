/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize two pointers:
 *    a. left = 0 (start of array)
 *    b. right = height.length - 1 (end of array)
 * 2. Initialize max_area = 0.
 * 3. While left < right:
 *    a. Calculate width = right - left.
 *    b. Compute min_height = Math.min(height[left], height[right]).
 *    c. Calculate area = width × min_height and update max_area if larger.
 *    d. Move the pointer pointing to the shorter line inward:
 *       i. If height[left] < height[right], increment left.
 *       ii. Else, decrement right.
 * 4. Return max_area.
 */
var maxArea = function(height) {
    let l = 0, r = height.length-1, max = 0
    while(l<r){
        const w = r-l
        const h = Math.min(height[l],height[r])
        const a = w*h
        max = Math.max(max,a)

        if(height[l]<height[r]){
            l+=1
        }
        else {
            r-=1
        }
    }

    return max
};