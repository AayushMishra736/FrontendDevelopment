var digit = 756;
var a = digit % 10;
var b = 0;
var c = (digit / 10) % 10;
var count = 0;
while(digit > 0){
var rem = digit % 10;
count = count * 10 + rem;
digit = digit / 10;
}
console.log(count);