var removeElement = function(nums, val) {
    for(let i = nums.length; i >= 0; i--){
        if(nums[i] == val){
             nums.splice(i, 1);
        }
    }
    return nums;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))