var longestCommonPrefix = function(strs) {
    let ans = "";
    let len = strs.length;
    if(len >=2){
        for(let i = 0; i <= strs.length; i++){
            if(strs[0][i] == strs[len - 1][i]){
                ans += strs[0][i];
            }else{
                break;
            }
        }
    }else{
        ans = strs;
    }
    return ans;
};

console.log(longestCommonPrefix([""]));