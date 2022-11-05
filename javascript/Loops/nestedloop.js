//print 2 and and number of hyphon accordingly.
let two = 2;
let three = 3;
for(var counter = 1;counter <= 10;counter++){
    console.log("2 * ",counter," = ",two *  counter);
    for(threeCounter = 1;threeCounter <= counter;threeCounter++){
        console.log("- -");
    }
}