alert('Welcome to voting centre!!')
let age = prompt('Enter you age ')
if(age >= 18){
    document.write(`Eligible to vote because age is ${age}.`)
}
else{
    document.write(`Not Eligible to vote because age is ${age}.`)
}

///Automatic type conversion
let type = 5 + null;
console.log(type);
console.log(typeof type)


//String conversion
let variable = false;
console.log(typeof variable)
console.log(variable)
let NewType = String(variable);
console.log(typeof NewType)
console.log("Type a new value " + NewType)

//Number conversion
let value = false;
console.log(typeof value)
console.log(value)
let Newvalue = Number(value);
console.log(typeof Newvalue)
console.log(Newvalue)

//Boolean conversion
let booleanConversion = 1;
console.log(typeof value)
console.log(booleanConversion)
let booleanConversionNewvalue = Boolean(value);
console.log(typeof booleanConversionNewvalue)
console.log(booleanConversionNewvalue)

