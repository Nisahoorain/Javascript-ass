

//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.



//EX: 41//
console.log("\n Ex:41 Magicians:- \n")
function show_magicians(magicians){

  for(i=0; i<magicians.length; i++){

    console.log(magicians[i])
  }
}
 var magicians=["Jay Marshal","Max Maven","Campbell Mcrae","S. S.dams"];
show_magicians(magicians)