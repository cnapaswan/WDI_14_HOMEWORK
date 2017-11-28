//Part1 Grabbing input from user in the browser

var favFood = prompt('What is your favorite food?');
function answer() {
document.getElementById('part1').innerHTML = favFood;
}

answer();

//Part2 The Vegan Test

var choice = prompt('Menu tonight: Steak, fruit salad, tofurkey and pork chops');
var answer = choice.toLowerCase();

if (answer === 'steak'|| answer ==='pork chops') {
  console.log("Vagans be aware!");
} else if (answer === 'fruit salad'||answer === 'tofurkey') {
  console.log("This cuisine is Vegan friendly.");
} else {
  console.log("Sorry we do not serve " + answer + " tonight.");
}

//part3 The Fortune Teller

var numberOfChildren = 0;
var partnerName = 'Oohkala Mamahala';
var place = 'Fiji';
var jobTitle = 'Junior Hunter';

function storyOfMyLife(){
  document.getElementById('part3').innerHTML = "You will be a " + jobTitle + " in " + place + 
  ", and married to " + partnerName +
  " with " + numberOfChildren + " kid."}

storyOfMyLife();

//part4 The Age Calculator

var current = 2017;
var birthYear = 1992;
var age = current - birthYear;
var anotherAge = ((current - birthYear)-1);

  function ageAge(){
    document.getElementById('part4').innerHTML = "They are either " + age + " or " + anotherAge + "."
  }

ageAge();

//part5 The Lifetime Supply Calculator

var myAge = 25;
var deadAge = 150;
var snackPerDay = 3;
var totalEat = (snackPerDay * ((deadAge-myAge)*365));

function snack(){
  document.getElementById('part5').innerHTML = "You will need " + totalEat + " to last you until the ripe old age of " + deadAge + "."}

snack();