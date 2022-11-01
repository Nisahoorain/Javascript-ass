//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array 
//to show that you have one array of the original names and one array with the Great added to each magician’s name.




//EX: 43//

console.log("\n Ex:43 Unchanged Magicians:- \n")


function show_magicians(magicians){

  for(i=0; i<magicians.length; i++){

    console.log(magicians[i])
  }
}
 var magicians=["Jay Marshal","Max Maven","Campbell Mcrae","S. S.dams"];

function make_great2(magicians){
  
  let newarr=[];

  for(i=0; i<magicians.length; i++){
    newarr.push("The Great " + magicians[i]);
  }
  return newarr;
}

copy_great = make_great2(magicians)

console.log("Copy Great Magician Array : ");

show_magicians(copy_great);

console.log("\nThe Original Magician Array(Unchanged) : ");
show_magicians(magicians);