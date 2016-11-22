/*example 1*/

var big = Math.max(10.2, 4.5, 15.6);

var rounded = Math.round(big);

var sqrt = Math.sqrt(rounded);

document.write(sqrt);

/*example 3*/
var aName = new Array();

for(count=0;count<=10;count++){
	aName.push(count);
	console.log(aName[count]);
}

/*example 2*/

var aName = new Array();
aName = ["item1", "item2", "item3"];
console.log(aName.length);

aName.push("item4");
aName.unshift("item5");
aName.pop;
aName.shift;

console.log(aName[3]);

/*example 4*/

var itsTen = 7;

if (itsTen == 10){
	document.write("It's a ten!");
}

/*if its not true it will write the else*/

else if(itsTen == 5){
	document.write("It's a 5!");
}

else{
	document.write("It's NOT Ten or a 5!");
}

/*example 4*/

document.write(face());

function face(){
	var var1 = 1;
	var var2 = 1;

	var total = var1 + var2;

	return total;
}
