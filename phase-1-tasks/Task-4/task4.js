/**
 *  Name: Ibrahim Sallam
 * 
 *  Task 4: Automatic Type Conversion
 * 
 *  Description:
* 
*       Try adding a string + a number.
* 
*       Try multiplying a string × a number.
* 
*       Print the result and explain what happened.
*/

let string = "3";
let number = 3

// adding a string + a number
console.log("reuslt of string + number = " + string + number);
console.log("reuslt of string * number = " + string * number);
console.log(`type of string + number is: ${typeof(string + number)}`);
// multiplying a string × a number
console.log(`type of string * number is: ${typeof(string * number)}`);

/* Type coercion is automatic conversion of a value from one data type to another in programming
*  in our example when excute string + number → engine concatenation string with number
*  in other side we can't excute string multiple number like 'hello' * 3 so engine coercion string to number to multiplying
*/