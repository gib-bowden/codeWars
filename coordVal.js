//determine whether a string containing coordinates is valid


function isValidCoordinates(coordinates){
	if (coordinates.match(".*[a-z].*/i")) {
	  	return false; 
	}
	var arr = coordinates.split(",")
	if (arr.length > 2) {
	  	return false}
	var boolArr = arr.map((coordinate, i) => {
	  	absCoord = Math.abs(Number(coordinate))
	  		if (isNaN(absCoord) == true) {
	  			return false; 
	  		} else if (i === 0) {
	  			return (absCoord > 90 || absCoord < 0) ? false : true
	  		} else {
	  			return (absCoord > 180 || absCoord < 0) ? false : true
	  		}
	  	})
	return boolArr.every((bool) => {return (bool === true)})
}



console.log(isValidCoordinates("23.245, 1e1"))