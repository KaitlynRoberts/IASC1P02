var theDate = new Date();
var year = theDate.getFullYear();
var month = theDate.getMonth();
var day = theDate.getDate();
console.log(day+"/"+month+"/"+year);

var myAlert = alert("The Devil!");
console.log(myAlert);

var myAlert = confirm("This is an alert!");
console.log(myAlert);

var myAlert = prompt("Enter your favourite food");
console.log(myAlert);

function getName(){
  var firstName = document.getElementById("firstName").value;
  console.log(firstName);
}
