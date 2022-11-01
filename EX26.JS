//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.





//EX: 26//
console.log("\n EX:26, Alien Colors #2:-\n")



console.log("\n Part:a Check Alien Colors:\n")
function alien_colorb(colorsb){
   
   if(colorsb=="green")
  {
      console.log(colorsb+"="+" the player just earned 5 points.");
  }


   else
   {
     console.log(colorsb+"="+" the player just earned 10 points.");
  }
 
}

  alien_colorb("green")
  alien_colorb("red")
  alien_colorb("yellow")



  console.log("\n Part:b for another version \n")

function alien_pointsb(pointsb){

   if(pointsb<=5)
    {
       console.log(pointsb,"="+" Sorry, you lost");
    }

    else {
       console.log(pointsb,"="+" Congratulation! You win")
    }
    
 }
 alien_pointsb(5)
 alien_pointsb(7)
 alien_pointsb(10)