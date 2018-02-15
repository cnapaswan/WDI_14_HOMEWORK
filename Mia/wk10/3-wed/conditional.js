// Conditionals

// You're a bouncer at a bar. Given an age variable, 
//create a conditional that satisfies the following requirements...

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".
// // Your answer goes here.
// Bonus

// Bar patrons must have an ID if the bouncer is even going to consider what age they are.

// If the patron has an ID, the bouncer will then check if they are of the proper age
// If the patron does not have an ID, the bouncer will tell them "No ID, no entry."
// Hint: Whether the patron has an ID or not can be stored in a hasId variable. 
// What do you think the stored data type should be?


var hasId = true

function bouncer(age) {

  if (hasId == true){ 
    switch(true){
      case age >= 21 && age < 75:
        console.log("Come on in")
        break;
      case age >= 18 && age < 21: 
        console.log("come in but no drink for you")
        break;
      case age < 18:
        console.log("you can sneak in when im not lookin")
      case age >= 75:
        console.log("are you sure you want to be here?")
    }
  } else {
    console.log("no ID no entry")
  }
  
}




