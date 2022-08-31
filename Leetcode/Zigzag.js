var convert = function(s, numRows) {
    let fstring = [];
    let newarr = s.split("");
    let counter = 0;

    while(fstring.length <= newarr.length){
        for(let i = 0; i < newarr.length; i++){
            counter++
            if(counter === numRows + 2){
                fstring.push(newarr[i]);
                newarr.splice(i, 1);
                counter = 0;
                numRows--;
            }
        }
    }

    return fstring;
};

console.log(convert("PAYPALISHIRING", 3));