

//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, 
//such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.



// //EX:45//

console.log("\n EX:45 CARS:- \n ")
function forcar(manufacturer, model, color, price){
this.manufacturername = manufacturer;
this.modelname = model;
this.colors = color;
this.prices = price;
}

let Car1 = new forcar("ford",2003,"blue",1500000);
console.log(Car1)

let Car2 = new forcar("suzuki",2011,"black",500000);
console.log(Car2)

let Car3 = new forcar("toyota",2017,"blue",3000000);
console.log(Car3)
