// Arrays
// Javascript provides us with a number of native methods that allow us to interact with arrays. 
//Find methods that do each of the following and provide an example...

// Add an element to the back of an array.
// push
fruitAgain = ["apple", "orange"]
fruitAgain.push("banana") //>> ["apple", "orange", "banana"]


// Remove an element from the back of an array.
// pop
fruitAgain.pop() //>> return "banana" //>> fruitAgain = ["apple", "orange"]

// Add an element to the front of an array.
//unshift
fruitAgain.unshift("banana") //>>  ["banana", "apple", "orange"]

// Remove an element from the front of an array.
//shift
fruitAgain.shift() //>> return "banana" //>> ["apple", "orange"]

// Concatenates all the elements in an array into a string.
//join
fruitString = fruitAgain.join("") //>>"appleorange"

// Separates the characters of a string into an array. This one is a string method.
fruitString.split("")

/////////////////////////

//What will the contents of the below arrays be after the code samples are executed? 
//Come up with an answer yourself before testing it out in the console.

var numbers = [2, 4, 6, 8]
numbers.pop() // [2,4,6]
numbers.push(10) // [2,4,6,10]
numbers.unshift(3) //[3,2,4,6,10]



//What is the return value of the below code sample? 
//Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ") //"dot dash pause dash dot" //
moreMorse.split(" ") //["dot","dash", "pause", "dash", "dot"]

//What will the contents of the below array be after the below code sample is executed? 
//Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
// bands = [["Paul", "John", "George", "Pete"]]
bands.unshift(stones)
// bands = [["Brian", "Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George", "Pete"]]
bands[bands.length - 1].pop()
// bands = [["Brian", "Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George"]]
bands[0].shift()
// bands = [[Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George"]]
bands[1][3] = "Ringo"
// bands = [[Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George","Ringo"]]