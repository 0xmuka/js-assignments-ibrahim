/**
 *  Name: Ibrahim Sallam
 * 
 *  Bonus 4: Minimum Number Finder
 * 
 * Description: 
 *      - Ask the user to enter 3 numbers.
 * 
 *      - Print the smallest number.
*/


let inuptFirstNumber = Number(prompt("Enter your first number: "));
let inuptSecondNumber = Number(prompt("Enter your second number: "));
let inuptThirdNumber = Number(prompt("Enter your third number: "));

let numbers = [inuptFirstNumber, inuptSecondNumber, inuptThirdNumber];

let smallest = numbers[0];

for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] < smallest) {
        smallest = numbers[index];
    }
}

console.log("The smallest number is: " + smallest);
