


//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


//Ex: 3//
console.log("\n EX:3, Name Cases:- \n")
var name="Nisa Hooarain";

console.log("Printing in uppercase:")
var changetouppercase1 = name.toLocaleUpperCase();
console.log("Uppercase:"+" "+changetouppercase1);

var name="Nisa Hooarain";

console.log("Printing in lowercase:")
var changetolowercase2 = name.toLocaleLowerCase();
console.log("Lowercase:" +" "+changetolowercase2);

console.log("Printing in titlecase:")
function toCapitalize(word){
    let result=''
    for(var i=0;i<word.length;i++){
        if(i==0){
            result+= word[i].toUpperCase()
        }else{
            result+=word[i]
        }
    }
    return result
}
console.log( "Titlecase: " +toCapitalize('nisa')+' '+toCapitalize('hoorain'))


