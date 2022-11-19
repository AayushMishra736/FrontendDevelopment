class Bike{
    constructor(Category,Company){
        this.Category = Category;
        this.Company = Company;
    }
    SelectBike(){
        return "Bike is of company" + this.Company + " and of category " + this.Category;
    }
}
class BikeFeature extends Bike{
    constructor(Bike,name,color){
        super(Bike);
        this.name = name;
        this.color = color;
    }
    feature(){
        return "Bike feature is " + this.name + " and of color " + this.color;
    }
}
let bike = new BikeFeature("Off Road","Royal Enfield","Himalyan","Green");
console.log(bike);