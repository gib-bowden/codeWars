// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

function solution(roman) {
	var RomArr = roman.split("");
	var intArr = RomArr.map((numeral) => {
		switch (numeral) { 
			case "M": 
				return 1000; 
			break;
			case "D": 
				return 500; 
			break;	
			case "C": 
				return 100; 
			break;
			case "L": 
				return 50; 
			break;
			case "X": 
				return 10; 
			break;
			case "V": 
				return 5; 
			break;
			case "I": 
				return 1; 
			break;
		}
	})
	var solution = intArr.reduce((sum, value, i, array) => {
		var nextValue = array[i + 1]
		var previousValue = array[i - 1]
		if (value > previousValue) {
			return sum; 
		}
		else if (nextValue === undefined || value >= nextValue) {
			return sum + value; 
		} 
		else if (value < nextValue) {
			return (sum + (nextValue - value));
		}
	},0);
	return solution
}

console.log(solution("MMVIII"));
