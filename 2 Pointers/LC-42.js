/**
 * Time Complexity: O(n)
 * Space Complexity: O(1) 
 * Approach:
 * 1. Initialize two pointers: left = 0 and right = height.length - 1.
 * 2. Track left_max and right_max as the maximum seen so far from each end.
 * 3. While left < right:
 *    a. If height[left] < height[right]:
 *       i. If height[left] >= left_max, update left_max.
 *       ii. Else, add left_max - height[left] to total.
 *       iii. Move left forward.
 *    b. Else:
 *       i. If height[right] >= right_max, update right_max.
 *       ii. Else, add right_max - height[right] to total.
 *       iii. Move right backward.
 */
var trap = function(height) {
    let l = 0, r = height.length-1, leftMax = 0, rightMax = 0, total = 0;
    while(l<r){
        if(height[l]<height[r]){
            leftMax = Math.max(leftMax,height[l])
            total += leftMax-height[l]
            l++
        } else {
            rightMax = Math.max(rightMax, height[r])
            total += rightMax - height[r]
            r--
        }
    }
    return total
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])