function dirReduc(arr){
	var ref = {NORTH: 1, SOUTH: -1, EAST: 100, WEST: -100};
	var total = arr.reduce((sum, direction) => {
		return sum + (ref[direction])
	},0)
	return total;
}



console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))