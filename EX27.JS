//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//Write three versions of this program, making sure each message is printed for the appropriate color alien.




//EX: 27//

console.log("\n EX:27 Alien Colors #3 :-\n")


console.log("\n Part:a Check Alien Colors:\n")

function alien_colorc(colorsc){
   
      if(colorsc=="green")
     {
         console.log(colorsc+"="+" the player just earned 5 points.");
     }


      else if(colorsc==="red")
      {
        console.log(colorsc+"="+" the player just earned 10 points.");
     }



      else if(colorsc==="yellow")
      {
        console.log(colorsc+"="+" the player just earned 15 points.");
     }

   }

   


     alien_colorc("green")
     alien_colorc("red")
     alien_colorc("yellow")



    
console.log("\n Part:b for another version \n")
function alien_pointsc(pointsc){

     if(pointsc<=5)
      {
         console.log(pointsc,"="+" Sorry, you lost");
      }

      else if(pointsc<=8){
         console.log(pointsc,"="+" Congratulation! You win")
      }
      else if(pointsc===10){
        console.log(pointsc,"="+" Superb!")

      }
   }
   alien_pointsc(5)
   alien_pointsc(7)
   alien_pointsc(10)
   