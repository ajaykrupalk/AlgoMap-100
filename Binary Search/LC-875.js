/**
 * Time Complexity: O(n log m)
 * Space Complexity: O(1)
 * Approach:
 * 1. Define helper `canFinish(k)` that returns true if all piles can be eaten within `h` hours (sum of `Math.ceil(p / k)` ≤ `h`).
 * 2. Initialize the search range: `left = 1` (min speed) and `right = Math.max(...piles)` (max pile size).
 * 3. While `left < right`:
 *    a. Compute `mid = Math.floor((left + right) / 2)`.
 *    b. If `canFinish(mid)` is true, set `right = mid` to try a lower speed; otherwise set `left = mid + 1` to try a higher speed.
 * 4. Return `left` as the minimum viable eating speed.
 */
var minEatingSpeed = function(piles,h){
    const canFinish = (k) => {
        let hours = 0;
        for(const pile of piles){
            hours += Math.ceil(pile/k)
        }
        return hours <= h
    }

    let left = 1;
    let right = Math.max(...piles)

    while(left < right){
        const mid = Math.floor((left+right)/2)

        if(canFinish(mid)){
            right = mid;
        } else {
            left = mid+1
        }
    }

    return left
}