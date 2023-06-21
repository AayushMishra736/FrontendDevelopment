document.write("This is working fine....");
console.log("this is to check log...");
var x = 5;
x = 7;
console.log(x);
let y = 10;
x = 'hi this is aayush';
console.log(x);
const z = 12;
console.log(z);
/////Operators 
let que = 'Questions';
let ans = 'Answers';
console.log(que + ans);
console.log(`hello ${ans}`);
////Conditions
let age = 17
const voterId = 'yes' 
if(age > 18 && voterId == 'yes'){
    console.log("Person is eligible to vote.")
}
else{
    console.log("Person is not eligible to vote.")
}

let isLoggedIn = 1;
let option = isLoggedIn == 1 ? "Login to see verification." : "Logout"
console.log(option)

//nullish coalescing
let one;
one = "Personal Account"
let result = (one ?? "Guest User")
console.log(result)





