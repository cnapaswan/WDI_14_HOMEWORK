var origin = prompt("Please insert origin")
var destination = prompt("please insert destination")

/** do the clean up later (apply to variables too)
var cleanUserInput = function(){
myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
removeChar.split('').join('');
}

**/

/**
//21 routes in total
12 = frontback ala
34 = frontback glen
56 = frontback sand
(11)(12)    (13)(14)     (15)(16)
(22)        (23)  (24)(25)(26)
(33)(34)    (35)(36)
(44)        (45)  (46)
(55)(56)
(66)

6+5+4+3+2+1
**/


//route within the line variables

var frontAla = ["Flinders Street", "Richmond"] //11
var inAla = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]//12
var backAla = ["East Richmond", "Burnley", "Hawthorn", "Glenferrie"]//22

var frontGlen = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond"]//33
var inGlen = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]//34
var backGlen = ["Kooyong", "Tooronga"]//44

var frontSand = ["Southern Cross", "Richmond"]//55
var inSand = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]//56
var backSand = ["South Yarra", "Prahran", "Windsor"]//66

//route changing at richmond
//var froAlafroGlen = frontAla.concat(frontGlen) //13
//var froAlaBaGlen = frontAla.concat(backGlen) //14
// do I really have to do all 21???


var stations =[frontAla, backAla, frontGlen, backGlen, frontSand, backSand]

var findStations = function(ori,des){
  var originFound = false
  var destinationFound = false
  
  for(i = 0; i < stations.length; i++){
    if (stations[i].includes(origin)) {
      originFound = true

    } 
    if (stations[i].includes(destination)) {
       destinationFound = true
    }
  }

  if(originFound === false){
    document.getElementById("start").innerHTML = "origin: " + " " + "please insert correct station"; 
    }
  if(destinationFound === false){
    document.getElementById("finish").innerHTML = "destination: " + " " + "please insert correct station"; 
  }
}



document.getElementById("start").innerHTML = "origin: " + origin; 
document.getElementById("finish").innerHTML = "destination: " + destination; 

findStations()


//NEXT TO DO
//Print the journey .....
//document.getElementById("routy").innerHTML = backAla.join(" -----> ")