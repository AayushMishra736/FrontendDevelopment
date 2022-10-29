const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question("Enter the Digit : ", value =>{
    value = Number(value);
if(value % 7 == 0){
    console.log("Number is divisible by 7." ,value);
}
else{
    console.log("Number is not divisble by 7.", value );
}
});