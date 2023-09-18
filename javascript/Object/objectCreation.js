let person = {
firstName : 'Abhay',
lastName : 'Mishra'
}

console.log(person.firstName)
console.log(person)

person.firstName = 'John Snow';
console.log(person)
person.age = '25';
console.log(person)

delete person.lastName
console.log(person)

console.log('height' in person)

//use of for loop to iterate over object

console.log("Use of for loop for object iteration")

for(let key in person){
    console.log(key + " : " + person[key])
}