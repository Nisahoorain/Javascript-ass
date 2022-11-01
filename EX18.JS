//Seeing the World: Think of at least five places in the world you’d like to visit.

//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.










// EX 18//

console.log("\n EX 18, Seeing the World:-  \n")

console.log("\n Part:a print original array:\n ")
    var fvrtplaces = ["Turkey","New zealand","Paris","London","Dubai"]
    console.log(fvrtplaces)


console.log("\n Part:b print array alphabetical order:\n ")
    let arrorder=fvrtplaces.sort()
    console.log(arrorder)


console.log("\n Part:c print original array:\n")
    var fvrtplaces = ["Turkey","New zealand","Paris","London","Dubai"]
    console.log(fvrtplaces)



console.log("\n Part:d print array reverse alphabetical order:\n ")
     let rvrsarrorder= arrorder.reverse()
    console.log(rvrsarrorder)


console.log("\n Part:e print original array:\n ")
    var fvrtplaces = ["Turkey","New zealand","Paris","London","Dubai"]
    console.log(fvrtplaces)


console.log("\n Part:f print reverse order of array list:\n ")
    let rvrslist = fvrtplaces.reverse()
    console.log(rvrslist)


console.log("\n Part:g print again reverse order of array list to back original:\n ")
    let again=rvrslist.reverse()
    console.log(again)



console.log("\n Part:h sort array and print to show its order changed order:\n ")
    let sortchng = arrorder.sort()
    console.log(sortchng)



console.log("\n Part:i sort array to reverse alphabets and print to show its order changed order:\n ")
    let sortchng2= rvrsarrorder.sort().reverse()
    console.log(sortchng2)



