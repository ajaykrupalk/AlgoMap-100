var threeSum = function (nums) {
    nums.sort((a,b)=>a-b);
    const output = [];
    let l = 0, r = nums.length -1;
    for(let i = 0; i < nums.length-1; i++){
        if(nums[i]>0){
            break;
        }

        if(i>0 && nums[i]===nums[i-1]){
            continue
        }

        l = i+1, r = nums.length-1
        while(l<r){
            let sum = nums[i]+nums[l]+nums[r]
            if(sum==0){
                output.push([nums[i],nums[l],nums[r]])
                l+=1
                r-=1
                while(l<r && nums[l] === nums[l-1]) l++
                while(l<r && nums[r] === nums[r+1]) r--
            } else if(sum>0){
                r--
            } else {
                l++
            }
        }
    }
    return output
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))
console.log(threeSum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]))