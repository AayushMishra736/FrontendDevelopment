class Car{
constructor(name, year){
    this.name = name;
    this.year = year;
}
age(){
    let date = new Date();
    return date.getDate() - this.year 
  }
}
let car = new Car("Ford",2019);
console.log(car);