// // //Define a function
// // function myFunction(message){
// //     console.log(message)
// // }
// // //Calling a function
// // myFunction(100)
// // //call it any number of times.
// // myFunction()
// // myFunction()
// // myFunction()

// function sentenceBuilder(person, place, action, item){
//     var fP = " went to the ";
//     var sP = ", and did ";
//     var tP = " but there was a problem, ";
//     var foP = " did not work.";

//     var cs = person + fP + place + sP + action + tP + item + foP;
//     console.log(cs);
// }

// sentenceBuilder("angie", "MOMA", "take a photo", "camera");

// function madlib(adjective, noun2, noun3, adjective2, verb, verb2)
// {
//     var first = "Once upon a " + noun3 + " there was a " + noun2;
//     var second = " who was as beautiful as a " + adjective + " " + noun3 + ".";
//     var third = " the " + noun2 + " was " + adjective2 + " " + verb + " to the home of a famous " + adjective + " " + noun3 + ".";
//     var fourth = " the " + noun2 + " found a locket on the way to " + noun3;
//     var fifth = " she gifted it to the " + noun3 + " and headed back home";
//     var sentence = (first + second + third + fourth + fifth);
//     console.log(sentence);

// }
// madlib("yellow", "princess", "monkey", "excited", "running", "screaming");

// function getNumber() {
//     var theSpecialNumber = 29;
//     return theSpecialNumber;
// }
// console.log( getNumber());
// var newNumber = getNumber() + 100;
// console.log(newNumber);

// console.log(getNumber() )

// function taxCalculator(itemPrice) {
//     var tax = itemPrice * .0855
//     var fixedtax = tax.toFixed(2);
//     return parseInt(itemPrice + tax);
// }

// var laptopPrice = 999.95;
// var laptopTax = taxCalculator(laptopPrice);
// console.log("the price of your laptop is $" + laptopPrice + " with the tax, it comes out to " + laptopTax);
// taxCalculator(999.95)


// function that adds two numbers. Add them.
// Add the sum to the first number.
// Multiply by second number and return.
// function mathifier(num1, num2){
//     var sum = num1 + num2;
//     sum += num1;
//     var productOfSumAndNum2 = sum * num2;
//     return productOfSumAndNum2;
// }
// console.log(mathifier(1, 2));

function mathResults(num1, num2){
    console.log("the numbers in question are " + num1 + ' ' + num2);
    var sum = num1 + num2;
    console.log("The sum of these two numbers " + sum);
    var difference = num1 - num2;
    console.log("The difference between these two numbers is " + difference);
    var product = num1 * num2;
    console.log("The product of these two numbers is " + product);
    var divident = num1 / num2;
    console.log("The divident of these two numbers is " + divident);
    var remainder = num1 % num2;
    console.log("The remainder of these two number is " + remainder);
}
mathResults(1, 1);