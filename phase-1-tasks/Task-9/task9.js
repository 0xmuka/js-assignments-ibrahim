/**
 *  Name: Ibrahim Sallam
 * 
 *  Task 9: Conditional Execution
 * 
 * Description: - Ask the user to enter their age.
    
- Print:
    
    - "Child" if age < 13.
        
    - "Teenager" if 13 ≤ age ≤ 19.
        
    - "Adult" if age ≥ 20.
        

*/

let getAge = prompt("Enter your age: ");

if(getAge < 13){
    console.log("Child");
}
else if( 13 <= getAge & getAge <= 19){
    console.log("Teenager");
}
else
{
    console.log("Adult");
}