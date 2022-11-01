


//Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
//such as I really love pizza!




//EX: 34//
console.log("\nEX:34 Pizzas:-\n")

console.log("\n Part:a, print array\n ")
let pizza=["Fajti","Tikka","Afgani"];
for(i=0; i<pizza.length; i++)
{
  console.log(pizza[i])
}



console.log("\n Part:b, print array with statment\n ")
for(i=0; i<pizza.length; i++)
{
  console.log("I really love", pizza[i])
}


console.log("\n Part:c another statement\n")
var statement="I love eating pizza a lot. It is my favorite food. There are different types of pizza but I love Fajita pizza mostly. "
var add="I really love pizza"
console.log(statement, add)


