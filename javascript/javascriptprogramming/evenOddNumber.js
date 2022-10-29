const readline = require('readline').createInterface({
input: process.stdin,
output : process.stdout
});

readline.question("Enter a digit : ",value =>{
    value = Number(value);
if(value % 2 == 0){
    console.log("Number is even",value);
}
else{
console.log("Number is odd",value);
}
});