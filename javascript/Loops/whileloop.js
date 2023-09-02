//calculate the sum of all even digit;
let start = 1;
let end = 200;
let sum = 0;
while(start <= end){
    if(start % 2 == 0){
        sum = sum + start;
    }
    start++;
}
console.log("Sum of digit is ",sum);


//while loop execution
let counter = 0;
while(counter <= 10){
console.log("Printing the number " + counter);
counter++;
}