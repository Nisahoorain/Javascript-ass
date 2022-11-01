
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


//EX: 37//
console.log("EX:37 Large-Shirt:-")

function make_shirt(info={}){

  if(info.size==null){
  
    info.size='large'
  }
  for(var reqr in info){
    console.log(info[reqr])
}

}
make_shirt({
  'size': null,
  'print':"I love JS"
})
make_shirt({
  'size': 'small',
  'print':"I love JS"
})

make_shirt({
  'size': 16,
  'print':"JS for all"
})