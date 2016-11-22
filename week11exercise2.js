function aName(){

var first = new Array();
first = ["food", "pizza", "tacos", "pasta", "garlic bread"];


var second = new Array();
second = ["fabulous", "beautiful", "amazing", "funny", "lovely"];


var random=Math.floor(Math.random()*5)
var random2=Math.floor(Math.random()*5)

document.getElementById("output").innerHTML = first[random] + " " + second[random2] +"</br>";

}
