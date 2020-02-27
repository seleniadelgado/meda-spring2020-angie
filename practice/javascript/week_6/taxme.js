//function that returns how much a laptop costs after taxes.


function taxCalculator(itemPrice) {
    var tax = itemPrice * .0855
    var fixedtax = tax.toFixed(2);
    return parseInt(itemPrice + tax);
}

var laptopPrice = 999.95;
var laptopTax = taxCalculator(laptopPrice);
console.log("The price of your laptop is $" + laptopPrice + " with California tax, it comes out to " + laptopTax + ".");
taxCalculator(999.95)