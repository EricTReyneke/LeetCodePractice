function lekker(arr){
    let sum = 0;
    let fac = 1;

    for(let i = 0; i < arr.length; i++){
        fac *= arr[i];
        sum += arr[i];
    }

    if(fac % 2 == 0){
        return sum;
    }else{
        return 0;
    }
}

console.log(lekker([2, 2]));