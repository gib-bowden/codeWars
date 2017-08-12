function scramble(str1, str2) {
 var arr1 = str1.split("");
 var arr2 = str2.split("");
 var sortArr1 = arr1.sort();
 var unique = function (arr) {
 	for (var i = 0; i < arr.length; i++){
 		if (arr[i] !== arr[(i-1)]) {
 			arr.splice(1, 0);
 		}
 	} 
 } return unique(arr1);

}

var string1 = 'aabbcamaomsccdd'
var string2 = 'commas'


scramble(string1, string2)