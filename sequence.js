var num = "129083450852799999856890"

function whoIsNext(x){
   var winner = 1
   var arr = x.split("");
   for (var i = 0; i < arr.length; i++){
     var currentFive = (arr[i]) + (arr[i+1]) + (arr[i+2]) + (arr[i+3]) + (arr[i+4]);
     var nextFive = (arr[i+1]) + (arr[i+2]) + (arr[i+3]) + (arr[i+4]) + (arr[i+5]);
     var currentFiveNumber = Number(currentFive)
     var nextFiveNumber = Number(nextFive)
     if ((i === 0) && (currentFiveNumber >= nextFiveNumber)) {
       winner = currentFiveNumber 
     } else if ((i === 0) && (currentFiveNumber < nextFiveNumber)) {
       winner = nextFiveNumber
     } else if ((i > 0) && (currentFiveNumber > winner)) {
       winner = currentFiveNumber
     }
  }
    return winner; 
}
     
console.log(whoIsNext(num))



// this was solved - best solution from other user is below

var num = "129083450852799999856890"



function solution(digits){
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}

console.log(solution(num));