/**
 *  Name: Ibrahim Sallam
 * 
 *  Task 7: Chessboard (Basic)
 * 
 * Description: Print an 8×8 grid like a chessboard using # and spaces.
*/

let col = 8

for (let i = 1; i <= col; i++) {
    let raw = "";
    for (let j = 1; j <= col; j++) 
    {
        raw += "#";
    }
    console.log(raw);
}