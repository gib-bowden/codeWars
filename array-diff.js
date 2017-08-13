/*
Your goal in this kata is to implement an difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]
*/

function array_diff(a, b) {
	var noMatch;
	var finalArr = [];
	if (b.length === 0) {
	  finalArr = a;
	} else {
	  	for (var i = 0; i < b.length; i++) {
	  		for (var j = 0; j < a.length; j++) {
	  			(b[i] === a[j]) ? a.splice(j, 1, "") : noMatch;
			}
		for (var ii = 0; ii <= a.length; ii++) {
			if (typeof a[ii] === "number") {
	 			finalArr.push(a[ii]);
		}
	}
}
	} return finalArr;
}

console.log(array_diff([1,2,2],[]));

//best version of this solution 

function array_diff_best(a, b) {
	var dope;
  return a.filter(function(x) { return b.indexOf(x) == -1; }); // uses filter for array a - this returns the value to the array when the function = true; so here, whenever the b.indexOff(x) == -1 the value does not exist in array b
}


console.log(array_diff_best([1,2,2],[]));