//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
//write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings
//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array







//EX: 24//

console.log("\nEX:24, More Conditional Tests:-\n") 

console.log("\nPart a: Test of eqaulity or inequality with string:\n")
var numa = 42
var numb= 60
if(numa==="42"){
    console.log("numa='42'" + " true")
}
else{
    console.log( "numa!='42'" +" False, because var(numa) have Number Data type! ")
}



console.log("\nPart b: Test using lower case function:\n")
name="NISA HOORAIN"
if(name==name.toLocaleLowerCase()){
    console.log(name + "(in lower case)")

}
else{
    console.log(name + "(Statement is false)")

}





console.log("\nPart c: Using (==,!=, <, >, <=, >=)\n")
if(numa==numb)
    {
    console.log((numa+"=="+numb) + ":" +" True")
    }
    else
    {
        console.log((numa+ "=="+numb)+ ":" + " False")
    }


    if(numa!=numb)
    {
    console.log((numa+"!="+numb) + ":" +" True")
    }
    else
    {
        console.log((numa+ "!="+numb)+ ":" + " False")
    }

if(numa>numb)
    {
    console.log((numa+">"+numb) + ":" +" True")
    }
    else
    {
        console.log((numa+ ">"+numb)+ ":" + " False")
    }

if(numa<numb)
    {
    console.log((numa+ "<" +numb) + ":" +" True")
    }
    else
    {
        console.log((numa+ " <"+numb)+ ":" + " False")
    }

if(numa>=numb)
    {
    console.log(n(numa+" >="+ numb) + ":" +" True")
    }
    else
    {
        console.log((numa+">="+numb)+ ":" + " False")
    }

if(numa<=numb)
   {
    console.log((numa+ "<="+ numb) + ":" +" True")
    }
    else
    {
        console.log((numa+ "<="+ numb)+ ":" + " False")
    }




console.log("\nPart d: Using (&& AND ||)\n")

    if(numa<=numb && numa>numb && numa<50)
   {
    console.log((numa +"<="+ numb +" && " + numa+">"+numb +" && "+ numa+"<50") + ":" +" True")
    }
    else
    {
        console.log((numa +"<="+ numb +" && " + numa+">"+numb +" && "+ numa+"<50")+ ":" + " False")
    }


    if(numa<=numb || numa>numb || numa<50)
    {
     console.log((numa +"<="+ numb +" || " + numa+">"+numb +" || "+ numa+"<50") + ":" +" True")
     }
     else
     {
         console.log((numa +"<="+ numb +" || " + numa+">"+numb +" || "+ numa+"<50")+ ":" + " False")
     }
 



console.log("\nPart e: testing whether an item is in array\n")


var arr=["Ali","Amna","Fatima","Hafsa"]

if(arr.find(n => n ==="Amna"))
{
console.log("The given name is present:'Amna'")

}
else(
    console.log("Not found")
)





console.log("\nPart e: testing whether an item is not in array\n")

if(arr.find(n => n ==="Meerab"))
{

console.log("The given name is present:'Meerab'")

}
else(
    console.log("Not found")
)