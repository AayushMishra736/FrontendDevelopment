const readline = require('readline').createInterface({
input : process.stdin,
output : process.stdout
});

readline.question("Enter a digit : ",value =>{
value = Number(value);
if(value % 3 == 0){
console.log("Number is a multiple of 3",value);
}
else{ 
console.log("Number is not a multiple of 3",value);
}
});