class Hero {
constructor(name){
this.carname = name;
}
get cnam(){
    return this.carname;
}
set cnam(x){
    this.carname = x;
}
}
cnam = "splendre";
console.log(cnam);