const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

const fruit = ["Apple","Mango","Grapes","Pineapple"];
console.log(fruit.join("|"));

fruit.push("Kiwi");
console.log(fruit);

fruit.pop();
console.log(fruit);

fruits.shift();
console.log(fruits);

fruits.unshift("Lemon");
console.log(fruits);

delete fruits[0];
console.log(fruits);

const girls = ["Cecilie", "Lone"];
const boys = ["Emil", "Tobias", "Linus"];

const coEducation = girls.concat(boys);
console.log(coEducation);

//to add the element on second position
fruits.splice(2,0,"Lemon","Kiwi");
console.log(fruits);

//to remove the element 
fruits.splice(1,2);
console.log(fruits);

const sugar = fruits.slice(2)
console.log(sugar);

