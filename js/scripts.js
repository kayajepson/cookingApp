var galToLit = function(n){
	return n * 3.785412;
};

var n = parseFloat(prompt("how many gallons"));

alert("you have " + galToLit(n) + " liters.");
