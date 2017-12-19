#Arrays


planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
#Access the second value in planeteers.
planeteers[1]
#Add "Heart" to the end of planeteers.
planeteers.push("Heart")
#Remove "Captain Planet" from the array (without using a method).
planeteers.delete("Captain Planet")

#Combine planeteers with 
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] 
#and save the result in a variable called heroes.
heroes = planeteers + rangers #["Earth", "Wind", "Fire", "Water", "Heart", "Red", "Blue", "Pink", "Yellow", "Black"]

#Alphabetize the contents of heroes using a method. The Ruby documentation might help.

def alphabetize(arr)
  return arr.sort
end

alphabetize(heroes)

#Randomize the contents of heroes using a method. The Ruby documentation might help.
def everydayimshuffling(arr)
  return arr.shuffle
end
everydayimshuffling(heroes)

#Bonus
#Select a random element from heroes using a method. The Ruby documentation might help.
def pikmebabeonemoretime(arr)
  return arr.sample
end
pikmebabeonemoretime(heroes)

Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.

those_b = []
def bwhere (arr)
  arr.each do |elem|
    if(elem.start_with?('B'))
      those_b.push(elem)

  end
  return
end
# Your answer here
Hashes

Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.

# Your answer here
Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.

# Your answer here
Remove the radical key-value pair from ninja_turtle.

# Your answer here
Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).

# Your answer here
Access the first element of pizza_toppings.

# Your answer here
Produce an array containing all of ninja_turtle's keys using a method. The Ruby documentation might help.

# Your answer here
Bonus

Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. The Ruby documentation might help.

# Your answer here