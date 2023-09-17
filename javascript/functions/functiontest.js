//argument function
function multiply(num){
for(let i = 1;i <= 10;i++){
    console.log(`${num} * ${i} = ${num*i}`)
}
}
// for(var j = 1;j < 5;j++){
//     multiply(j)
//     console.log("--------------------------")
// }
/////
function add(){
    if(arguments.length == 0){
        console.log("No argument  passed !!")
    }
    else{
        let sum = 0;
        for(let i = 0;i < arguments.length;i++){
            sum = sum +  arguments[i]
        }
        console.log("Result is : " + sum)
    }
}
add()
add(10,20,30,40)


var car = "Mustang";
var car = "tata";
console.log(car)

//anonymus function
setTimeout(function (){
    console.log("Calling from anonymous function " + "Hello world !!")
},3000);

//immediately invoked function
(function(){
    console.log("This is immediately invoked function.")
})()

