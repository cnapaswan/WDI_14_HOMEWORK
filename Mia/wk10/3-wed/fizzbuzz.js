//Bonus: Fizz-Buzz

//Fizz-Buzz is a classic coding exercise that you can create using your knowledge 
//of conditionals and loops. Implement code that does the following...

// Counts from 1 to 100 and prints out something for each number.
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number does not meet any of the above conditions, just print the number.
// Your output should look something like this...

// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
// Your answer goes here.

/*
Bonus (for the bonus)

Encapsulate all of your logic into a function, so that each iteration of the game will trigger function calls that look something like these...
fizzBuzz(1)
// => prints "1" to the console

fizzBuzz(3)
// => prints "3" to the console

fizzBuzz(15)
// => prints "FizzBuzz" to the console*/



function fizzBuzz(num){
  if(num % 3 == 0 && num % 5 !== 0){
    console.log("Fizz")
  } else if(num % 5 == 0 && num % 3 !== 0){
    console.log("Buzz")
  } else if(num % 5 == 0 && num % 3 == 0){
    console.log("FizzBuzz")
  } else {
    console.log(i)
  }
}

for(var i = 1; i < 101 ; i++){
  fizzBuzz(i)
}





