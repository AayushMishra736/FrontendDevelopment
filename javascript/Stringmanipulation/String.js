let value = "Hello"
console.log(value)
let Newvalue = `${value} Master aayush `
console.log(Newvalue)
document.write(Newvalue)
document.write("<br>" + " Printing length of string " + Newvalue.length)

//Compare String
let String1 = "Aayush";
let String2 = "aayush";
document.write("<br>")
if(String1 == String2){
    document.write("Name are equal")
}
else{
    document.write("Name are not equal")
}
document.write("<br>" + String1.concat(String2))

//Substring 
let newString = "                This is javascript tutorial                 ";
document.write("<br>")
document.write(newString)
document.write("<br>" + newString.indexOf('javascript'))
document.write("<br>" + newString.lastIndexOf('tutorial'))
document.write("<br>" + newString.trim())
document.write("<br>" + newString.toLowerCase())
document.write("<br>" + newString.toUpperCase())
document.write("<br>" + newString.includes("javascript"))
document.write("<br" +  newString.replace('javascript','React'))
