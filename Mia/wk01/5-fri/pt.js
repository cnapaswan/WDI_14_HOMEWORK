/*Your function then checks if the stations are valid, 
and if they aren’t then it ends the function with a message to the user 
to enter a valid station. As the code is now, 
the user will have to refresh the page in order to input the station names again. 

Can you think of a way to keep getting input until it is valid? 
The check is also case sensitive, which means if I type in richmond or RICHMOND then the check will fail.

You’re using if and else if when there are only two possible conditions. 
The code will be easier to read if you use else instead of else if in these situations. 
It will also be faster – every time you have an else if statement, 
the computer needs to check whether it is truthy or falsy. 
You won’t notice the difference in situations where you’re checking once, 
but if you had an additional check inside a loop that went through thousands of times 
it might start to visibly slow the program.*/


var origin = prompt("Please insert origin")
var destination = prompt("please insert destination")

//
var stations = [
  ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"], 
  ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"], 
  ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
]

var findStations = function(){
  // ORIGIN
  var originFound = false
  var originLine
  var originArray

  for(i = 0; i < stations.length; i++){
    if (stations[i].includes(origin)) {
      originFound = true
      originLine = i
      originArray = stations[i]
    } 
  }

  if(originFound === false){
    document.getElementById("start").innerHTML = "origin: " + " " + "please insert correct station"; 
  }
  // DESTINATION
  var destinationFound = false
  var destinationLine
  var destinationArray
  
  for(i = 0; i < stations.length; i++){
    if (stations[i].includes(destination)) {
      destinationFound = true
      destinationLine = i
      destinationArray = stations[i]
    }
  }

  if(destinationFound === false) {
    document.getElementById("finish").innerHTML = "destination: " + " " + "please insert correct station"; 
  }

  if(originFound === false || destinationFound === false){
    return 
  }

  var completeArray

  if (origin === destination) {
    document.getElementById("routy").innerHTML = "You are not going anywhere"
    return 
  }

  if (origin === 'Richmond'){
    var oriPosiInnerArr = destinationArray.indexOf(origin)
    var desPotiInnerArr = destinationArray.indexOf(destination)

    if (oriPosiInnerArr > desPotiInnerArr){
      completeArray = destinationArray.slice(desPotiInnerArr, (oriPosiInnerArr + 1)).reverse()
    } else if (oriPosiInnerArr < desPotiInnerArr){
      completeArray = destinationArray.slice(oriPosiInnerArr,(desPotiInnerArr + 1))
    }
  } else if (destination === 'Richmond'){
    var oriPosiInnerArr = originArray.indexOf(origin)
    var desPotiInnerArr = originArray.indexOf(destination)

    if (oriPosiInnerArr > desPotiInnerArr){
      completeArray = originArray.slice(desPotiInnerArr, (oriPosiInnerArr + 1)).reverse()
    } else if (oriPosiInnerArr < desPotiInnerArr){
      completeArray = originArray.slice(oriPosiInnerArr,(desPotiInnerArr + 1))
    }
  }

  else if (originLine === destinationLine){
    var oriPosiInnerArr = originArray.indexOf(origin)
    var desPotiInnerArr = destinationArray.indexOf(destination)

    if (oriPosiInnerArr > desPotiInnerArr){
      completeArray = originArray.slice(desPotiInnerArr, (oriPosiInnerArr + 1)).reverse()
    } else if (oriPosiInnerArr < desPotiInnerArr){
      completeArray = originArray.slice(oriPosiInnerArr,(desPotiInnerArr + 1))
    }
  }


    //diferent line
  else if (originLine !== destinationLine) { 

    var oriInOriArray = originArray.indexOf(origin)
    var richInOriArray = originArray.indexOf('Richmond')

    var richInDesArray = destinationArray.indexOf('Richmond')
    var desInDesArray = destinationArray.indexOf(destination)

    var oriCompleteArr
    var desCompleteArr

    if (oriInOriArray < richInOriArray){
      oriCompleteArr = originArray.slice(oriInOriArray, richInOriArray)
    } else if (richInOriArray < oriInOriArray){
      oriCompleteArr = originArray.slice(richInOriArray, (oriInOriArray +1)).reverse()
    }

    if (richInDesArray < desInDesArray) {
      desCompleteArr = destinationArray.slice(richInDesArray, (desInDesArray +1))
    } else if (desInDesArray < richInDesArray){
      desCompleteArr = destinationArray.slice(desInDesArray,richInDesArray).reverse()
    }

    completeArray = oriCompleteArr.concat(desCompleteArr)

  }
    
  document.getElementById("journey").innerHTML = completeArray.join(' -----> ')

  if ((completeArray.length -1) > 1){
    document.getElementById("stop").innerHTML = (completeArray.length -1) + " stops in total"
  } else {
    document.getElementById("stop").innerHTML = (completeArray.length -1) + " stop in total"
  }

  document.getElementById("start").innerHTML = "origin: " + origin; 
  document.getElementById("finish").innerHTML = "destination: " + destination; 

}

findStations()
