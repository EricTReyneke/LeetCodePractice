var searchInsert = function(nums, target) {
    let index = nums.length;
    let help = 0;
    for(let i = nums.length - 1; i >= 0 ; i--){
        let helper2 = target - nums[i]
        if(nums[i] == target){
            return i;
        }else if(Math.abs(helper2) < Math.abs(help)){
            index = i + 1;
        }
    }
    return index
};

console.log(searchInsert([1,3,5,6], 2));