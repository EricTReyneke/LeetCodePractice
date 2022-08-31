var lengthOfLastWord = function(s) {
    let newArr = s.split(" ");
    let len = newArr.length;
    let LastWord = newArr[len - 1];
    counter = LastWord.length;

    return counter;
};

console.log(lengthOfLastWord("Lekker en jy."));