/**
 *  Name: Ibrahim Sallam
 * 
 *  Bonus 1: Calculator
 * 
 * Description: Build a simple program that asks the user for two numbers and an operator (+, -, *, /) and prints the result.

*/

let firstNumber = Number(prompt("Enter your first number: "));
let secnodNumber = Number(prompt("Enter your second number: "));

let addition = firstNumber + secnodNumber;
let subtraction = firstNumber - secnodNumber;
let multiplication = firstNumber * secnodNumber;
let division = firstNumber / secnodNumber;

// Addition of two numbers.
console.log("Addition of " + firstNumber + " + " + secnodNumber + " = " + addition);

// Subtraction of two numbers.
console.log("Subtraction of " + firstNumber + " - " + secnodNumber + " = " + subtraction);

// Multiplication of two numbers.
console.log(`Multiplication of ${firstNumber} * ${secnodNumber} = ${multiplication}`);

//Division of two numbers.
console.log(`Division of ${firstNumber} / ${secnodNumber} = ${division}`);