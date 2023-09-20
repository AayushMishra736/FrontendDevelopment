let date = new Date();
console.log(date)

let formatedDate = new Date(2018,11,18,10,33,52,67)
console.log(formatedDate)

let stringFormatedDate = new Date("October 13,2019 11:12:33");
console.log(stringFormatedDate)

console.log(date.getTime())

console.log(formatedDate.getFullYear())

console.log(formatedDate.getMonth())

console.log(formatedDate.getHours())

console.log(formatedDate.getMinutes())

console.log(formatedDate.getSeconds())

console.log(formatedDate.getDay())

formatedDate.setDate(23)
console.log(formatedDate.getDate())


let milliseconds = 1578567991011;
let newDate = new Date(milliseconds)
console.log("old date : " +  newDate)
let dateAfterfifty = newDate.setDate(newDate.getDate() + 50)
console.log("Date after 50 days " + newDate.toISOString())
console.log(new Date(dateAfterfifty).toString())


