function getSum(a, b) {
  var start;
  var end;
  var solution; 
  var arr = [];
  if (a > b) {
    start = b;
    end = a;
  } else if (a < b) {
    start = a;
    end = b;
  } else {
    solution = a; 
  }
  for (i = start; i <= end; i++) {
    arr.push(i); 
  }
  solution = arr.reduce((sum, value) => {
    return sum + value; 
  })
  return solution; 
}

console.log(getSum(1, 0))