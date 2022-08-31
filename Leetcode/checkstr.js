var strStr = function(haystack, needle){
    let counter = 0;
    if(!needle) return 0;
    if(haystack.length <= 1) return 0;
    for(let i = 0; i <= haystack.length - 1; i++){
        if(haystack[i] === needle[0 + counter]){
            counter++;
        }
    }
    
    if(counter == needle.length){
        return counter
    }else{
        return -1
    }
};

console.log(strStr("hello", "ll"));