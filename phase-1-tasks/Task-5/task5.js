/**
 *  Name: Ibrahim Sallam
 * 
 *  Task 5: Looping a Triangle
 * 
 *  Description: Print the following triangle
 *
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

for (let i = 1; i <= 7; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "#"
    }
    console.log(row);
}

//Refernce to process.stdout https://freedium.cfd/https://medium.com/coding-beauty/javascript-console-log-without-newline-20e7e63cca36