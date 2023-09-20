student = {
firstName : 'Tony',
lastName : 'Stark',
callFunction : function (){
    console.log("This function is for saying hello !")
},
//Calling function in ES6
es6Function (){
    console.log("This function is ES6 function !")
},
carDetails () {
    console.log("Hello my name is " + this.firstName + " and i have car of brand " + car.brand + " model "
     + car.model + " having color  " + car.color)
}

}

let car = {
    brand : 'Tata',
    model : 'Safari',
    color : 'Black'
}

function greet(){
    console.log('Say! Hello')
}

student.sayHello = greet;

student.sayHello()

student.callFunction()

student.es6Function()

student.carDetails()