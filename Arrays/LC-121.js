/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * Two pointers are maintained, which move in forward direction
 * If prices[r] < prices[l], shift the left pointer to where right pointer is
 * Else find max by Math.max(max, prices[l]-prices[r]), increement right pointer by 1
 */

var maxProfit = function (prices) {
    let l = 0, r = 1, max = 0;
    while(r < prices.length){
        if(prices[r] < prices[l]){
            l = r
        }
        max = Math.max(max,prices[r]-prices[l])
        r += 1
    }
    console.log(max)
}

maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])