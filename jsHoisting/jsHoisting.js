//When we send JS to broswer to run, first it parses the code to see if its right JS friendly syntax. Second, it runs the code but not in order like other codes.

//Q1.
// console.log(hello);                                   
// var hello = 'world';
//interpreter reads the above code
// var hello;
// console.log(hello):
// hello = 'world';

//output: is undefined b/c var hello is being hoisted. In JS, variable declaration are hoisted to the top of their scope. 


//Q2
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

//code is read in this order
// var needle;
// function test(){
//     var needle = 'magnet'; 
//     console.log(needle);    
// }
// test();

//Q3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

//code is read in this order
// var brendan
// console.log(brendan);
// function was never called so the console prints out the global variable only

//Q4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

//code is read in this order
// var food;
// food = 'chicken';
// console.log(food);
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone'
// }
// eat();

//Q5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// code is read in this order
// var mean 
// mean();
//console.log(food);
// mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//Q6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
// //code is ran
// // var genre
// // console.log(genre);
// // genre = "disco";
// //rewind();
// //function rewind(){
//     genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

//Q7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

//code is ran
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// console.log(dojo);