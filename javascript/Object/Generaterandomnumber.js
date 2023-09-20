function getRandomNumber(min,max){
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x;
}

for(let i = 0;i < 10;i++){
    console.log(getRandomNumber(1000,9999))
}