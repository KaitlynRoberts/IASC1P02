var myAlert = alert("Warning: Math");
console.log(myAlert);

function add() {
  var number1 = Number(document.getElementById("Num1").value);
  var number2 = Number(document.getElementById("Num2").value);
  var total = number1 + number2;
  document.getElementById("Calculator").innerHTML=total;
}


function subtract() {
  var number1 = Number(document.getElementById("Num1").value);
  var number2 = Number(document.getElementById("Num2").value);
  var total = number1 - number2;
  document.getElementById("Calculator").innerHTML=total;
}


function multiply() {
  var number1 = Number(document.getElementById("Num1").value);
  var number2 = Number(document.getElementById("Num2").value);
  var total = number1 * number2;
document.getElementById("Calculator").innerHTML=total;
}


function divide(one, two) {
  var number1 = Number(document.getElementById("Num1").value);
  var number2 = Number(document.getElementById("Num2").value);
  var total = number1 / number2;
document.getElementById("Calculator").innerHTML=total;
}

function reset(){
  document.getElementById("myForm").reset();
}
