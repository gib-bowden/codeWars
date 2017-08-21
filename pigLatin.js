function pigIt(str) {
	var arr = str.split(" ");
	var pig = arr.map((word) => {
		var firstLetter = word.charAt(0)
		return (word + firstLetter + "ay").substr(1);
	})
	return pig.join(" ");
}

console.log(pigIt("gib is a pretty cool guy"))