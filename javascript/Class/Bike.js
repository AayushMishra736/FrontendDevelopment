class Bike{
    constructor(name ,year){
        this.name = name;
        this.year = year;
    }
    feature(){
        return "Name of the bike is " + this.name + " and model is of " + this.year + " year.";
    }
}
let b = new Bike("harley",2016);
console.log(b.feature()); 
console.log(b);