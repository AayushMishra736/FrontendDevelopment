function Student(fs,ls,division,age){
    this.firstName = fs,
    this.lastName = ls,
    this.division = division,
    this.age = age
}

var student1 = new Student("John","Snow","A",13)

console.log(student1)

student1.name = function(){
    return this.firstName + " " + this.lastName
}

console.log(student1.name())