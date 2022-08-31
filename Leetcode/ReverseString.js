let par = ";Hi, My Naam is! lekker; en jy ek will, dood gan aan die, binne kant."

function isLetter(c){
    return c.toLowerCase() != c.toUpperCase();
}

function lekker(Par){
    let arr = par.split(" ");
    let FWords = "";


    for(let i = arr.length - 1; i >= 0; i--){
        FWords += arr[i] + " ";
    }

    let newarr = FWords.split(" ");

    FWords = "";

    newarr.map((item)=>{
        let thisword = "";
        for(let j = 0; j < item.length; j++){
            if(isLetter(item[j])){
                thisword += item[j];
            }
        }
        FWords += thisword + " ";
    })

    newarr = FWords.split(" ");

    for(let m = 0; m < arr.length; m++){
        if(!isLetter(arr[m].charAt(0))){
            newarr[m] = arr[m].charAt(0) + newarr[m];
        }

        if(!isLetter(arr[m].charAt(arr[m].length - 1))){
            newarr[m] += arr[m].charAt(arr[m].length - 1);
        }
    }
    console.log(newarr.join(" "));
}

lekker(par);