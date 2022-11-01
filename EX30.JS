
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.



// EX: 30//
console.log("\n EX:30, Hello Admin: :-\n")
 var username=["Ali","Asif","Bilal","Awais","Zohan"]


  for(i=0; i<username.length; i++){

         if(i===0){
             console.log(" \n Part:a, for Admin\n ")
             console.log("Hello", username[0], "would you like to see a status report?");
             console.log(" \n Part:b, for users\n ");
            }    
         else{
           console.log("Hello",username[i], "thank you for logging in again.")
          }
  }