// var moveZeros = function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       arr.push(0);
//       debugger
//     } 
//     debugger
//   }
//   return arr;
// }

// test = [0,2,0,1,0,1,0,3,0,1,0,0,1,9];

// console.log(moveZeros(test));



// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// The function has two input variables:

// customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// The function should return an integer, the total time required.

// EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:

// There is only ONE queue, and
// The order of the queue NEVER changes, and
// Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// The diagram on the wiki page I linked to at the bottom of the description may be useful.

//SOLUTION

// customers = [1,2,3,4];

// function queueTime(customers, n) {
//   let tills = Array(n).fill(0);
  
//   customers.forEach((customer) => {
//     let nextTill = tills.indexOf(Math.min(...tills))
//     tills[nextTill] += customer;
//   });

//   return Math.max(...tills);
// }

// console.log(queueTime(customers, 2));


//creating an arry with the provided arguments using the spread operator 
var x = function(...n){
	console.log(typeof(n)); //object
	console.log(Array.isArray(n)) //true
}
x(1,2,4,5,"hello",7);


//creates an array like object with the arguments (i.e. the "old way")
var y = function(){
	console.log(typeof(arguments)); //object
	console.log(Array.isArray(arguments)) //false
}
y(1,2,4,5,"hello",7);


//turns an array like object into an array (convert the "old way")
var z = function(){
	//var args = Array.prototype.slice.call(arguments,0); //long form
	var args = [].slice.call(arguments,0); //short form - this allows you - by using call() - to use the slice function, which is a method belonging to the Array object, on the array like object 
	console.log(typeof(args)); //object
	console.log(Array.isArray(args)) //true
}
z(1,2,4,5,"hello",7)


var xx = function (a, b, c, ...n) { // this is a rest parameter - use when you don't know all the parameters 
 console.log(n);	
}

xx(1, 2, 3, 4, 5, 6, 7, "this"); //console.log(n) returns [4, 5, 6, 7, "this"]


var arr = [4, 5, 6, 7, "this"]
var yy = function (a, b, c, ...n) { // this is a rest parameter - use when you don't know all the parameters 
 console.log(n);	
}

yy(1, 2, 3, arr); //console.log(n) returns [4, 5, 6, 7, "this"] // this passed the array in as an argurment



var doWhatever = ['have fun', 'vacation', 'buy house']
var life = ['born', 'walk', 'run', 'drive', 'work', ...doWhatever, 'die'];

console.log(life); //returns the life array with doWhatever array included

var a = [1,2,3,4,5];
var b = [6,7,8,9,10];

a.push(...b);
console.log(a);
