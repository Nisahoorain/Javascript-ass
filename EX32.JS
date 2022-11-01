//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted//.





//EX: 32/

console.log("\n EX:32, Checking Usernames:-\n")

console.log("\n Part:a, array of current users\n ")

let current_users=["Amna","Awais","fatima","Zara","Hafsa"];

current_users.forEach((n)=>{
  console.log(n)
});

console.log("\n Part:b, array of new users with some current\n  ");

var new_users=["Mirha","Ayesha","Nabeel","Haris","zarish"];

var arr = new_users.concat(current_users[0],current_users[1])


arr.forEach((n)=>{
  console.log(n)
});



console.log("\n Part:c, loop for msg\n ");

for(i=0; i<arr.length; i++){
  if (i<5){
    console.log(arr[i],"The username is available")
  }
   else if(i>=5){
      console.log(arr[i],"You will need to enter a new username")  
    }
  }