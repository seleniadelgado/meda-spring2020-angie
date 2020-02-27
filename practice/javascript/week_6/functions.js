//Functions we have used in class include console.log()
Math.round();
Math.floor();
Math.ceil();
Math.random();

//A function that belongs to a class ("Library") is called a Method.
//A variable that belongs to a class ("library") is called a property.
// console = class;
// log() function;

// var i;
// for (i = 0; i < 3; i++) {
//     console.log("hello")
// }

//The syntax structure of a function definition.
function nameOfFunction() {
    console.log("hello");
    console.log("hello");
    console.log("hello");
}
// nameOfFunction();

// function newfunc() {
//     console.log(123);
//     console.log("angie is so pretty\nyep, she is");
//     console.log(true);
// }
// newfunc()
// text is the parameter variable that will accept
//any data given to a function

// function takeDataIn(text1, text2) {
//     console.log(text1);
//     console.log(text2);
// }

// takeDataIn("hey", "bye");
// takeDataIn("hi", "by");

function adder(number1, number2){
    var sum = number1 - number2;

    console.log("The difference of " + number1 + " and " + number2 + " equals " + sum);
}
adder(1, 2);