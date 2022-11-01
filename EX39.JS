
//City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.





//EX: 39//


console.log("EX:39 City Names:-")
function city_country(city, country){
  
  for(i=0; i<=arguments.length; i++){
    console.log(city[i]+", " +country[i] )
}
  }

city=["Karachi","New York","Makkah"];
country=["Pakistan","America","Saudia Arabia"];
city_country(city,country)
