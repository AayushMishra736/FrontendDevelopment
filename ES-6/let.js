let x = 10;
if(x == 10){
    let x = 20;
}

//ES-6
for(let i = 0;i < 5;i++){
    setTimeout(() => console.log(i),1000);
}
//TDZ
{
let counter = function ()  {
console.log(message);
};
let message = "hello";
console.log();
}