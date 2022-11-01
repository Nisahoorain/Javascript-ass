
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.




//EX: 31//
console.log("\n EX:31, No Users:-\n")
var username=["Ali","Asif","Bilal","Awais","Zohan"]



console.log("\n Part:a, If list is empty......:-\n")

if(username == ''){
console.log( "we need to find some users!")
}

else{
    console.log("not empty")
}



console.log("\n Part:b, Remove users:-\n")
username.splice(0)
console.log(username,"the list is empty")


