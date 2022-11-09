let str = "This is for learning javascripts tutorial.";
let substring  = str.substring(0,21);
console.log(substring);

let positionString = "This is for learning javascripts tutorial.";
let position =  positionString.indexOf("learning");
console.log(position);

let lastPosition = "This is for learning javascripts tutorial.";
let positionLast = lastPosition.lastIndexOf('javascripts');
console.log(positionLast);

let noWord = "This is for learning javascripts tutorial.";
let noWordPosition = noWord.lastIndexOf("iss");
console.log(noWordPosition);

let stringReplace = "This is for learning javascripts tutorial.";
let afterRepalcement = stringReplace.replace("javascripts","java");
console.log(afterRepalcement);
