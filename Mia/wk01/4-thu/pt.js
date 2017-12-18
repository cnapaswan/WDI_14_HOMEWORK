//WIP
//please ignore my ptv
//im working on getting value from option
var org = document.querySelector('.slct_or')
var dtn = document.querySelector('.slct_dt')


var originName = org.options[org.selectedIndex].text
var destName = dtn.options[dtn.selectedIndex].text



function getOrg(event){
  var stationName = event.target


}

getOrg(event)


var stations = [
  ["flindersstreet", "richmond", "eastrichmond", "burnley", "hawthorn", "glenferrie"], 
  ["flagstaff", "melbournecentral", "parliament", "richmond", "kooyong", "tooronga"], 
  ["southerncross", "richmond", "southyarra", "prahran", "windsor"]
]

var stationsToPrint = [
  ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"], 
  ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"], 
  ["Southerncross", "Richmond", "South Yarra", "Prahran", "Windsor"]
]

var stationMapper = {}

for (var i = 0 ; i < stations.length ; i++) {
  for (var j = 0 ; j < stations[i].length ; j++) {
    stationMapper[stations[i][j]] = stationsToPrint[i][j];
  } 
}

console.log(stationMapper);


var originInput
var destinationInput


var findStations = function(){

  //origin search
  var originFound = false
  var originLine
  var originArray
  var oriFirstTime = true

  while(originFound === false){
    if (oriFirstTime === true) {
      originInput = prompt("please insert origin")
      oriFirstTime = false
    } else {
      originInput = prompt("please insert correct origin")
    }

    var origin = originInput.toLowerCase().split(' ').join('')
    console.log(origin)

    for(i = 0; i < stations.length; i++){
      if (stations[i].includes(origin)) {
          originFound = true
          originLine = i
          originArray = stations[i] //changed to stationToPrint??
      } 
    } 

    console.log(originArray)
  }/*end of origin while loop*/

  //destination search
  var destinationFound = false
  var destinationLine
  var destinationArray
  var desFirstTime = true

  while (destinationFound === false){
    
    if (desFirstTime === true) {
    destinationInput = prompt("please insert destination")
    desFirstTime = false
    }else{
      destinationInput = prompt("please insert correct destination")
    }

    var destination = destinationInput.toLowerCase().split(' ').join('')
    for(i = 0; i < stations.length; i++){
      if (stations[i].includes(destination)) {
        destinationFound = true
        destinationLine = i
        destinationArray = stations[i] //changed to stationToPrint??
      }
    }

    console.log(destinationArray)
  }/*end of destination while loop*/

  //result
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
    } else {
      completeArray = destinationArray.slice(oriPosiInnerArr,(desPotiInnerArr + 1))
    }

  } else if (destination === 'Richmond'){

    var oriPosiInnerArr = originArray.indexOf(origin)
    var desPotiInnerArr = originArray.indexOf(destination)

    if (oriPosiInnerArr > desPotiInnerArr){
      completeArray = originArray.slice(desPotiInnerArr, (oriPosiInnerArr + 1)).reverse()
    } else {
      completeArray = originArray.slice(oriPosiInnerArr,(desPotiInnerArr + 1))
    }

  } else if (originLine === destinationLine){
    var oriPosiInnerArr = originArray.indexOf(origin)
    var desPotiInnerArr = destinationArray.indexOf(destination)

    if (oriPosiInnerArr > desPotiInnerArr){
      completeArray = originArray.slice(desPotiInnerArr, (oriPosiInnerArr + 1)).reverse()
    } else {
      completeArray = originArray.slice(oriPosiInnerArr,(desPotiInnerArr + 1))
    }

  } else /*if (originLine !== destinationLine)*/ { 

    var oriInOriArray = originArray.indexOf(origin)
    var richInOriArray = originArray.indexOf('richmond')

    var richInDesArray = destinationArray.indexOf('richmond')
    var desInDesArray = destinationArray.indexOf(destination)

    var oriCompleteArr
    var desCompleteArr

    if (oriInOriArray < richInOriArray){
      oriCompleteArr = originArray.slice(oriInOriArray, richInOriArray + 1) //A = ori first - rich last
    } else {
      oriCompleteArr = originArray.slice(richInOriArray, (oriInOriArray + 1)).reverse() //B = rich first - ori last
    }

    if (richInDesArray < desInDesArray) {
      desCompleteArr = destinationArray.slice((richInDesArray+1), (desInDesArray+1))// C = rich first(no print) - des last
    } else {
      desCompleteArr = destinationArray.slice(desInDesArray,richInDesArray).reverse() //D = des first - rich last (no print)
    }

    completeArray = oriCompleteArr.concat(desCompleteArr)

    console.log("oriCompleteArr", oriCompleteArr)
    console.log("desCompleteArr", desCompleteArr)
  }  
  
  document.getElementById("journey").innerHTML = completeArray.join(' -----> ')

  var completeWithGoodNamesArray = []
  for (var i = 0 ; i < completeArray.length ; i++) {
    completeWithGoodNamesArray.push(stationMapper[completeArray[i]]);
  }

  document.getElementById("journey").innerHTML = completeWithGoodNamesArray.join(' -----> ')
  
  if ((completeArray.length -1) > 1){
    document.getElementById("stop").innerHTML = (completeArray.length -1) + " stops in total"
  } else {
    document.getElementById("stop").innerHTML = (completeArray.length -1) + " stop in total"
  }

  document.getElementById("start").innerHTML = "origin: " + origin; 
  document.getElementById("finish").innerHTML = "destination: " + destination; 


}

findStations()
