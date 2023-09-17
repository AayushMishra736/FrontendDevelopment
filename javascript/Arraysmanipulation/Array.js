let book = ["Math","ECO","GEO","History","Pol. Sci."]
document.write(book)
book.push("Hindi")
document.write("<br> add in end   " + book)
book.unshift("Comp.")
document.write("<br> add in start   " + book)
book.pop()
document.write("<br> remove from end    " + book)
book.shift()
document.write("<br> remove from start   " + book)
book.slice(1,2)
document.write("<br> removing element from position " + book)
// book = []
// document.write("<br> empty array " + book)
let position = book.indexOf("MAth")
document.write("<br> position of String in an array " + position);
document.write("<br> check wheather it is array or not : " + Array.isArray(book))

let word = "The quick brown fox jumps over the lazy dog"
let wordArray = word.split(" ")
document.write("<br> splitting the array " + wordArray)
let newJoinedArray = book.join("-")
document.write("<br> joining the array " + newJoinedArray)

let book2 = ["urdu","kannad"]
let result = book.concat(book2)
document.write("<br> result of two joined array " + result)

let bookWithPages = [["Math","300"],["ECO","50"],["GEO","89"],["History","45"]]
document.write("<br> multi dimensional array " + bookWithPages[1][0])
document.write("<br> multi dimensional array " + bookWithPages[1])
document.write("<br> multi dimensional array " + bookWithPages[1][1])

document.write("<br> print through for loop ")
for(let i = 0;i < book.length;i++){
document.write(`Element ${i} is at position ${book[i]} <br>`)
}
document.write("<br> iterating through for each ")
book.forEach(myFunction)

function myFunction(value){
    document.write(`Element at value ${value} <br>`)
}

document.write("<br> delete an array " + delete book[0])
document.write("<br> final array " + book)

let flatArray = [[1,2],[1,3],[1,5]];
let newArray = flatArray.flat()

document.write("<br> new flat array " + newArray)

///splice method

let fruit = ["John","Peter","Tony","Captain"]
fruit.splice(2,3,"Black Panther","War machine")

document.write("<br> new fruit array " + fruit)

document.write("<br> removing array " + fruit.splice(1,2))

///slice method
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
document.write("<br> New fruit array " + fruits)
let citrus = fruits.slice(1,2)
document.write("<br> New citrus fruit array " + citrus)
document.write("<br> New array after slice array " + fruits)

const fibre = fruits.slice(3);
document.write("<br> New fibre fruit array " + fibre)

const newFruit = ["Banana", "Orange", "Apple", "Mango"];
document.write("<br> New fibre fruit array " + newFruit) 






