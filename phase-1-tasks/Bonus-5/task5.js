/**
 *  Name: Ibrahim Sallam
 * 
 *  Bonus 5: Pattern – Pyramid
 * 
 * Description: 
 *      - Print an inverted pyramid like this:
    #####
     ####
      ###
       ##
        #
*/
let rows = 10;

for (let i = 0; i < rows; i++) {
    let row = "";

    for (let space = 0; space < i; space++) {
        row += " ";
    }

    for (let hash = rows - i; hash > 0; hash--) {
        row += "#";
    }

    console.log(row);
}
