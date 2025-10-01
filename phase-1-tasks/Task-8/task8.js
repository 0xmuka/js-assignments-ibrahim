/**
 *  Name: Ibrahim Sallam
 * 
 *  Task 8: Chessboard (Dynamic)
 * 
 * Description: The program should print a grid according to the value of size (e.g., 4×4 or 10×10).
*/


let getNumber = prompt("Enter your number: ");

for (let i = 0; i < getNumber; i++) {
    let raw = "";
    for (let j = 0; j < getNumber; j++) 
    {
        raw += "#";
    }
    console.log(raw);
}