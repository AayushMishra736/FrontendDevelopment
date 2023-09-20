function emp(id,name,salary){
this.id = id;
this.name = name;
this.salary = salary;
}

e = new emp(101,"Aayush",250000);
console.log(e.id," ",e.name," ",e.salary);

var person = new Object();
person.firstName = "New Name";
person.lastName = "No Name";
person.city = "Good city";
console.log(person)

//getter setter implementation

var City = {
    State : "MP",
    District : "Newdistrict",
    Pincode : "12345",
    get getState(){
        return this.State;
    },
    set setState(n){
        this.State = n.toUpperCase();
    }
}

City.setState = "up";

console.log(City.getState)
console.log(City)