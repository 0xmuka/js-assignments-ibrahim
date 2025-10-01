/**
 *  Name: Ibrahim Sallam
 * 
 *  Bonus 2: Multiplication Table
 * 
 * Description: Print the multiplication table from 1 to 10 using nested loops.
*/
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j).toString().padStart(4, " ");
    }
    console.log(row);
}
