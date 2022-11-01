
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
//and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as
// A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!



//EX: 35//

console.log("\nEX:35 Animals:-\n")

console.log("\n Part:a, print array\n ")

let animal= ["Giraffe","Rabbit","Cat"]
for(i=0; i<animal.length; i++){
  console.log(animal[i])
}



  console.log("\n Part:b Modify with statement:\n ")

for(i=0; i<animal.length; i++){
  if(i==0){
  console.log(animal[i]+":"+" They are mostly known for their long neck.")
}
else if(i==1){
  console.log(animal[i]+":"+" A rabbit is a small animal with long ears")
}
else if(i==2){
  console.log(animal[i]+":"+" Cats also have an acute sense of hearing")
}
}



console.log("\n Part:c  Common characteristic:\n ")
console.log("All these animals have Leaf shaped ears")
