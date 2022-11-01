
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// Print a message to each of the two people still on your list, letting them know they’re still invited.

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.




//EX 17//

console.log("\n EX 17, Shrinking Guest List:- \n")

var invitedppl = ["Haris","Amna","Hamna", "Arman","Ayesha","Nabeel"];

console.log("\n Part:a prints a message saying that you can invite only two people for dinner:\n ")
    console.log(" Sorry, but now I can invite only Two Peoples")

console.log("\n Part:b1 Remove guest except 2:\n ")
var remove = invitedppl.splice(2)    
invitedppl.forEach((n) =>{
    console.log(n)
}
);

console.log("\n Part:b2 Print msg to remove peoples:\n ")
var removemsg="we’re sorry we can’t invite you to dinner." 
remove.forEach((n)=>
{
    console.log(n+" "+ removemsg)
})


console.log("\n Part:d Print msg to people who are still in list:\n ")
var invitation1= "Sending you my heartiest invitation to join this dinner party.";
 invitedppl.forEach((n) =>{
     console.log( "Hey"+ " "+n+ "!"+" " + invitation1)
 });


console.log("\n Part:e Empty list:\n ") 
 invitedppl.splice(0)
 console.log(invitedppl);




