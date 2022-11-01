//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.

// Add one new guest to the beginning of your array.

// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// Print a new set of invitation messages, one for each person in your list.

//EX 16//

console.log("\n EX 16, More Guests:-  \n")

console.log("\n Part: a, Informing big dinner:\n ")
 var invitedppl = ["Amna","Arman","Ayesha"];
 invitedppl.forEach((n)=>{
    console.log(n,", Now Its a Big Dinner")
 })

 console.log("\n Part: b, add new guest to begin(adding HARIS):\n ")
      let nbguest = invitedppl.unshift("Haris")
    invitedppl.forEach((n)=>{
    console.log(n)
 })

console.log("\n Part: c, add new guest to middle(adding HAMNA):\n ")
      let nmguest = invitedppl.splice(2, 0, "Hamna")
    invitedppl.forEach((n)=>{
    console.log(n)
 }) 

console.log("\n Part: d, add new guest to end(adding NABEEL):\n ")
      let neguest = invitedppl.push("Nabeel")
      invitedppl.forEach((n)=>{
    console.log(n)

 })

console.log("\n Part: e, new invitation:\n ")
var invitation1= "Sending you my heartiest invitation to join this dinner party.";
invitedppl.forEach((n) =>{
    console.log( "Hey"+ " "+n+ "!"+" " + invitation1)
}
);


