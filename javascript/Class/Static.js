class Automobile{
constructor(name){
this.name = name;
}
static car(){
    return "This category of automobile belongs to car." + this.name;
}
}
console.log(Automobile.car("Range Rover"));