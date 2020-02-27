//makes a story based on information provided.


function madlib(adjective, noun2, noun3, adjective2, verb, verb2)
{
    var first = "Once upon a " + noun3 + " there was a " + noun2;
    var second = " who was as beautiful as a " + adjective + " " + noun3 + ".";
    var third = " the " + noun2 + " was " + adjective2 + " " + verb + " to the home of a famous " + adjective + " " + noun3 + ".";
    var fourth = " the " + noun2 + " found a locket on the way to " + noun3;
    var fifth = " she gifted it to the " + noun3 + " and headed back home";
    var sentence = (first + second + third + fourth + fifth);
    console.log(sentence);

}
madlib("yellow", "princess", "monkey", "excited", "running", "screaming");
