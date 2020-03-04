//made a pyramid that looks like this:
//*
//**
//***
//**
//*
// console.log("*");
// console.log("**");
// console.log("***");
// console.log("**");
// console.log("*");

function pyramidBuilder(pyramidHeight) {
    if (pyramidHeight == undefined) {
        var pyramidHeight = (Math.random() * 10) + 1;
        pyramidHeight = Math.floor(pyramidHeight);
    }

var pyramidRow = "";
console.log(pyramidHeight)
for (var i = 0; i < pyramidHeight; i++) {
    pyramidRow = pyramidRow + "*"
    console.log(pyramidRow);
}
var pyramidArray = pyramidRow.split("");
    for (var i = 0; i < pyramidHeight - 1; i++) {
    pyramidArray.pop();
    pyramidRow = pyramidArray.join("");
    console.log(pyramidRow);
    }
}
pyramidBuilder(3);
pyramidBuilder();