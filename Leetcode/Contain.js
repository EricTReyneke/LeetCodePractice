var maxArea = function(height) {
    let sum = 0;
    
    for(let i = 0; i <= height.length; i++){
        for(let j = height.length; j >= i; j--){
            for(let k = 1; k > i && k < j; k++){
                let h=Math.min(height[i],height[j])
                let prod=h*(j-i);
                if(prod>sum){
                    sum=prod;
                }
                if(height[i]<height[j]){
                    i++;
                }
                else{
                    j--;
                    }
                }
            }
    }
    return sum;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))