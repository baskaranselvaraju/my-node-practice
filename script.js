// Book Purchase

var bname = "Maths";
var price = 50;
var quantity = 5;

const total = price * quantity;

console.log("Book Name : ", bname);
console.log("Total :", total);

// Exercise 2:
// Temperature Conversion

// Declare a variable named celsius and set it to any temperature value.

// Convert it to Fahrenheit using the formula:

// Fahrenheit=(Celsius×9/5)+32

// Print both Celsius and Fahrenheit values.

var celsius = 25;
var temperature = 25;

const fahrenheit = (celsius * 9) / 5 + 32;

console.log("Temperature Conversion");
console.log("celsius", celsius);
console.log("Fahrenheit", fahrenheit);


// Exercise 3:

// Declare let marks = 45;.

// Use a ternary operator to print:

// “Pass” if marks ≥ 40

// “Fail” otherwise

const marks = 45;

const result = marks >= 40 ? "Pass" : "Fail";

console.log(`Result: ${result}`);

// Even or Odd Check

// Declare let num = 7;

// Use the modulus operator % and a ternary operator to print whether it’s even or odd.

const num = 7;

const find = num % 2 === 0 ? "Even" : "Odd";

console.log(`Result: ${find}`);

// Write a function checkEvenOdd(num) that checks whether a number is even or odd and prints it.
function evenOrOdd(num) {
  const result = num % 2 === 0 ? "Even" : "Odd";
  console.log(`Result: ${result}`);
}
evenOrOdd(5);


// const evenOrOdd = (num) => {
//   const result = num % 2 === 0 ? "Even" : "Odd";
//   console.log(`Result: ${result}`);
// };

// evenOrOdd(6);


// 2,Write a function findLargest(a, b, c) that prints the largest among three numbers using if...else statements.
// *The function compares the three numbers using if...else.
// *First, it checks if a is greater than or equal to both b and c.
// *If not, it checks if b is greater than or equal to both a and c.
// *Otherwise, c is the largest.

function findLargest(a, b, c) {
  if (a > b && a > c) {
    console.log("A is biggest number");
  } else if (b > a && b > c) {
    console.log("B is biggest");
  } else {
    console.log("C is biggest");
  }
}
findLargest(10,4,8)

// 3, (Print Numbers 1 to 10) 
// Write a function that prints numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
