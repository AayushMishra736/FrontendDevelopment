var display = document.getElementById('display'),
number = document.querySelectorAll('numbers'),
operator = document.querySelectorAll('.operators div'),
  result = document.getElementById('result'),
  resultDisplayed = false;

for(var i = 0;i < display.length;i++){
number[i].addEventListener("click", function(e){
var currentString = input.innerHTML;
var lastChar = currentString[currentString.length - 1];

if(resultDisplayed === false){
input.innerHTML += e.target.innerHTML;
}
else if(resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
    resultDisplayed = false;
    input.innerHTML += e.target.innerHTML;
}
else{
    resultDisplayed = false;  
    input.innerHTML = "";
    input.innerHTML += e.innerHTML;
} } );
}
for(var i = 0;i < display.length;i++){
operator[i].addEventListener(click,function(e)){
var currentString = input.innerHTML;
var lastChar = currentString[]

}

}


function border(){
    alert(document.getElementById("myDiv").style.border);
}
function onePrint(){
    document.getElementById("display").innerHTML = "1";
}
function twoPrint(){
    document.getElementById("display").innerHTML = "2";
}
function threePrint(){
    document.getElementById("display").innerHTML = "3";
}
function clearScreen(){
    document.getElementById("display").innerHTML = "";
}
function fourPrint(){
    document.getElementById("display").innerHTML = "4";
}
function fivePrint(){
    document.getElementById("display").innerHTML = "5";
}
function sixPrint(){
    document.getElementById("display").innerHTML = "6";
}
function subtract(){
    document.getElementById("display").innerHTML = "-";
}
function sevenPrint(){
    document.getElementById("display").innerHTML = "7";
}
function eightPrint(){
    document.getElementById("display").innerHTML = "8";
}
function ninePrint(){
    document.getElementById("display").innerHTML = "9";
}
function multiply(){
    document.getElementById("display").innerHTML = "*";
}
function zeroPrint(){
    document.getElementById("display").innerHTML = "0";
}
function doublezeroPrint(){
    document.getElementById("display").innerHTML = "00";
}
function addition(){
    document.getElementById("display").innerHTML = "+";
}
function division(){
    document.getElementById("display").innerHTML = "/";
}

var input = 


