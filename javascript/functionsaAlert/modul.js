alert('Welcome to voting centre!!')
let age = prompt('Enter you age ')
if(age >= 18){
    document.write(`Eligible to vote because age is ${age}.`)
}
else{
    document.write(`Not Eligible to vote because age is ${age}.`)
}