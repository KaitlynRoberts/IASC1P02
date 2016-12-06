function getMessage(){
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var emailAddress = document.getElementById("emailAddress").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  console.log(firstName);
  console.log(lastName);
  console.log(emailAddress);
  console.log(subject);
  console.log(message);
}

var myAlert = confirm("This is art.");
console.log(myAlert);

var d = new Date();
var n = d.toString();
document.write(d);

/* w3schools.com*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");

  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}
/* w3schools.com*/
}
