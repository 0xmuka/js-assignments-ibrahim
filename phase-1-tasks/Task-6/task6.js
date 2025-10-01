/**
 *  Name: Ibrahim Sallam
 * 
 *  Task 6: FizzBuzz
 * 
 * Description: Print numbers from 1 → 100.
 *   
*   - Replace:
    
        - Numbers divisible by 3 with `"Fizz"`.
            
        - Numbers divisible by 5 with `"Buzz"`.
            
        - Numbers divisible by both 3 and 5 with `"FizzBuzz"`.
*/

for (let index = 1; index <= 100; index++) {
    if(index % 3 == 0 & index % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(index % 3 == 0)
    {
        console.log("Fizz");
    }
    else if(index % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(index);
    }
    
}