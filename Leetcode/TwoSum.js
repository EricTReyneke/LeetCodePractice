/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let ans = []
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                ans.push(i);
                ans.push(j);
            }
        }
    }
    return ans;
};

console.log(twoSum([2,7,11,15], 9));