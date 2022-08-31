var minimumTotal = function(triangle) {
    let actualsum = 0;
    for(let i = triangle.length - 1; i >= 0; i--){
        let sum = 100;
        for(let j = 0; j < triangle[i].length; j++){
            if(triangle[i][j] < sum){
                sum = triangle[i][j];
            }
        }
        actualsum += sum
    }
    
    return actualsum;
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));