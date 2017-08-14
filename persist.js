// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number


function persistence(num) {
	var i = 0; 
	if (num < 10) {
		return i
	} else { 
    product = num.toString().split('').map(Number).reduce(function (a, b) {
            return a * b;
        }, 1); i++
    if (product < 10) {
    	return i
    } else { 
    	while (product > 9) {
    		product = product.toString().split('').map(Number).reduce(function (a, b) {
            return a * b;
        }, 1); i++; 
    	} 
    }
    } console.log(i);
	 return i;
}

persistence(4);


function persistence(num) {
	var i = 0; 
	if (num.length === 1) {
		return i
	} else { 
    	while (num.length > 1) {
    		num = num.toString().split('').map(Number).reduce(function (a, b) {
            		return a * b;
        		}, 1); i++; 
    	} return i;
	}
}

persistence(21);