
//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that 
//Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.

//EX:40//
console.log("\n Ex:40 Album:- \n")

function make_album(artistname, albumname){
 
    var obj1 ={ 
        artistname, 
        albumname
    
    }
     return obj1;
    }
    var show = make_album("Jubin Nautiyal","Shershaah")
    console.log(show)
    
    
    var show1 = make_album("Jubin Nautiyal","Shershaah")
    var show2 = make_album("Darshan Raval","Mitron")
    var show3 = make_album("Arijit Singh","Thank God")
    
    console.log(show1,show2, show3)
    
    
    function for_track(artistname1, albumname1, trackNum){
    
        var obj2 = { 
            artistname1, 
            albumname1
        
        }
    
        if(trackNum){
            obj2.trackNumm = trackNum;
        }
         return obj2;
    
    }
    var forshow = for_track("Jubin Nautiyal","Shershaah",2);
    console.log(forshow);
    
    
    
    