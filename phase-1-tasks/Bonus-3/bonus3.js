/**
 *  Name: Ibrahim Sallam
 * 
 *  Bonus 3: Palindrome Checker
 * 
 * Description: Ask the user to enter a word. Print true if the word is a palindrome (e.g., "level"), otherwise print false.
*/

let word = prompt("Enter your word: ");


//reversed = word.split('').reverse().join('') → built in functions solution


let reversed = "";

for (let index = word.length -1; index >= 0 ; index--) {
    reversed += word[index];    
}
console.log();

console.log(reversed);

if(word === reversed){
    console.log(true);
}
else
{
    console.log(false);;
}