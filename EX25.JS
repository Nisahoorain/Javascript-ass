//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color 
//and assign it a value of 'green', 'yellow', or 'red'.

//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)






//EX: 25//
console.log("\n EX:25, Alien Colors #1:-\n")


console.log("\n Part:a Check Alien Colors:\n")
     function alien_colora(colorsa){
   
   if(colorsa=="green")
  {
      console.log(colorsa+"="+" the player just earned 5 points.");
  }
 
}

  alien_colora("green")
  alien_colora("red")
  alien_colora("yellow")

       
console.log("\n Part:b for another version \n")

  function alien_pointsa(pointsa){
  
     if(pointsa<=5)
      {
         console.log(pointsa,"="+" Sorry, you lost");
      }
  
    
   }
   alien_pointsa(5)
   alien_pointsa(7)
   alien_pointsa(10)