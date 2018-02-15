input = process.argv[2]
readyToSum = []

for(var i = 1; i <= input; i++){
  if (i % 3 == 0 || i % 5 == 0) {
    readyToSum.push(i)
  }
}

function add(a, b) {
    return a + b;
}



console.log(readyToSum.reduce(add, 0))


