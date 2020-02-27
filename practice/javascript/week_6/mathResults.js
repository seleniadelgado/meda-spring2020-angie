//Function that does adding, subtracting, dividing and multiplying and prints each sentence.
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