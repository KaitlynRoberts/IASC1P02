
var myAlert = prompt("What is your age?");
console.log(myAlert);


var theDate = new Date();
var year = theDate.getFullYear();
console.log(year);

var total = year - myAlert;
document.getElementById("Birth Year").innerHTML=total;
