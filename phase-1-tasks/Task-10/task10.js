/**
 *  Name: Ibrahim Sallam
 * 
 *  Task 10: Custom Pattern
 * 
 * Description: 
 * 
- Ask the user to choose a shape:
    
    - Triangle
        
    - Square
        
- Ask for the number of rows.
    
- Print the chosen shape using #.

*/
let shape = prompt("Choose your shape for {Square} enter (1), for {Triangle} enter (2) > ");
let raws = prompt("Enter your number of rows > ")

if(shape == 1)
{
    for (let i = 0; i < raws; i++) {
        let raw = ""
        for (let j = 0; j < raws; j++) {
            raw += "#";
        }
        console.log(raw);
    }
}
else if(shape == 2){
        for (let i = 0; i < raws; i++) {
        let raw = ""
        for (let j = 0; j <= i; j++) {
            raw += "#";
        }
        console.log(raw);
    }
}
else
{
    console.log("Write a Correct Choise");
}