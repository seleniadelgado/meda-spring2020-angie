var myString = "Hello there how are you"

console.log(myString.length);

var myStringArray = myString.split("");

console.log(myStringArray);
myStringArray[23] = ".";
console.log(myStringArray);
var finishedString= myStringArray.join("");
console.log(finishedString);