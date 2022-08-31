var isValid = function(s) {
    let newArr = s.split("");
    if(newArr.length %2  !== 0){return false};
    
    for(let i = 0; i <= newArr.length; i++){
        let c = newArr[i];
        switch(c){
            case "(":
                if(newArr[i + 1] == ")"){
                    return true;
                }
                break;
            case "[":
                if(newArr[i + 1] == "]"){
                    return true;
                }
                break;
            case "{":
                if(newArr[i + 1] == "}"){
                    return true;
                }
                break;
                default:
                    return false;
        }
        return false;
    }
};

console.log(isValid("{}"));