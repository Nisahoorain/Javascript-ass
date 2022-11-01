//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
 

//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// Print a second set of invitation messages, one for each person who is still in your list.
 
 
 //EX:15//
console.log("\n EX: 15, Changing Guest List\:-\n")

console.log("Part a:Not inviting!")

 var invitedppl = ["Amna","Ali","Ayesha"];
console.log( invitedppl[1])


console.log("Part b:Replace name!")

 let rplc =invitedppl[1]="Arman"
invitedppl.forEach((n) =>{
    console.log(n)
}
);

console.log("Part c:Second msg!")
var invitation2="You are most cordially invited to be our guest at the dinner party we have arranged on [14 oct 2022]."

invitedppl.forEach((n) =>{
    console.log( "Hey"+ " "+n+ "!"+" " +invitation2)
}
);

