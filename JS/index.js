// // var num = 1;
// // var newNum = num++;
// // console.log(num);
// // console.log(newNum);

// function increment() {
//     var output = document.getElementById("output");
//     //  console.log(output)
//     output.innerHTML = Number(output.innerHTML) + 1;
// }

// function decrement () {

//     var output = document.getElementById("output");
//     //  console.log(output)
//     output.innerHTML = Number(output.innerHTML) - 1;
// }

var num1 = +prompt('Enter number 1');
var opt = prompt('Enter operator');
var num2 = +prompt('Enter number 2');

 var output = document.getElementById("output");

 if ( opt === '+') {
    output.innerHTML = num1 + num2;
 } 
 else if (opt === '-') {
     output.innerHTML = num1 -
      num2;
 }
 else if (opt === '*') {
     output.innerHTML = num1 * num2;
 }
 else if (opt === '/') {
     output.innerHTML = num1 / num2;
 }
 else{
      
 }


