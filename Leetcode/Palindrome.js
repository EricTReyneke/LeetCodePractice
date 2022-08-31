//arr = [“The quick brown fox jumped over the sleeping dog","Oozy rat in a sanitary zoo","Carla loves chocolate"];

function Pal(arr){
    arr.forEach(element => {
        element = element.toLowerCase();
        element = element.replace(/\s/g, "");
        newElement = element.split("").reverse().join("");
        if(newElement == element){
          console.log("it is a palindrome");
          return true;
        }
        else{
          console.log("it is not a palindrome");
          return false;
        }
       });
}

console.log(Pal(["The quick brown fox jumped over the sleeping dog","Oozy rat in a sanitary zoo","Carla loves chocolate"]));