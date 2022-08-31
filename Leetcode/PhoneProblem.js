var countTexts = function(pressedKeys) {
    const mod = 1e9 + 7;
    let arr = pressedKeys.split("");
    let counter = 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            while(counter < 3){
                if(arr[i] === arr[j]){
                    counter++;
                    break;
                }else{
                    break;
                }
            }
        }
        counter % mod;
        sum += counter;
        counter = 1;
    }
    return sum;
};

console.log(countTexts("22233"));