
//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
//Call your function for three different cities, at least one of which is not in the default country.


//EX: 38//
console.log("EX:38 Cities:-")
function descried_city(city, country){

  for(i=0; i<city.length; i++){
    if(i<=1){
      console.log(city[i]+ " is in "+  country)
    }
    else{
      console.log(city[i]+ " is not in "+  country)
    }
  }
}
descried_city(["Karachi","Lahore","NewYork"], "Pakistan")

