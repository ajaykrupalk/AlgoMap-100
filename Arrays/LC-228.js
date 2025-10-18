/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * Set the current element to be the start element
 * Iterate through the array until the range is maintained 
 * and index is less than length -1, keep increementing the index
 * If start element and element at index are same just push the element
 * Else, push the start-element->element-at-index to the output array
 */
var summaryRanges = function (nums) {
  let i = 0, output = [];
  while(i<nums.length){
    let start = nums[i];
    while(i<nums.length-1 && nums[i]+1 === nums[i+1]){
        i++;
    }
    if(start === nums[i]){
        output.push(start.toString())
    } else {
        output.push(`${start} -> ${nums[i]}`)
    }
    i++;
  }
  console.log(output)
};

summaryRanges([0, 1, 2, 4, 5, 7]);
summaryRanges([0, 2, 3, 4, 6, 8, 9]);
