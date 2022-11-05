function emp(id,name,salary){
this.id = id;
this.name = name;
this.salary = salary;
}

e = new emp(101,"Aayush",250000);
console.log(e.id," ",e.name," ",e.salary);