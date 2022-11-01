

//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.


// //EX: 42//

console.log("\n Ex:42 Great Magicians:- \n")
function make_great(magicians){
for(i=0; i<magicians.length; i++){
    console.log("The Great " + magicians[i])
  }
}
var magicians=["Jay Marshal","Max Maven","Campbell Mcrae","S. S.dams"];
make_great(magicians)
