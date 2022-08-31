var searchInsert = function(nums, target) {
    let point1 = 0;
    let point2 = nums.length - 1;
    let help = 100;
    let found = 100;
    let found2 = 100;
    
    while(point1 < point2){
        if(nums[point1] == target){
            return point1;
        }else if(nums[point2] === target){
            return point2;
        }else{
            if(nums[point1] - target < help){
                help = nums[point1];
                found = nums[point1 + 1];
            }
            
            if(nums[point2] - target < help){
                help = nums[point2];
                found2 = nums[point2 + 1];
            }
        }
        
        if(found < found2){
            help = found;
        }else{
            help = found2;
        }
        
        if(nums[point1] < target){
            point1++;
        }else if(nums[point2] > target){
                 point2--;
        }
    }
    return help;
};

console.log(searchInsert([1,3,5,6], 2))