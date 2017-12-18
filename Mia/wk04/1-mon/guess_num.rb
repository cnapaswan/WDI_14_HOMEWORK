puts "Hi what's your name?"
name = gets.chomp
puts "Hi #{name}, let's play this guess game!"
puts "firstival, choose the secret number between 0 and 10"
user_input = gets.chomp.to_i

secret_num = rand(10)

if user_input >= 0 && user_input <= 10
  while(user_input != secret_num) do
    if (user_input < secret_num)
      puts "Aww not quite, a lil more?"
      user_input = gets.chomp.to_i      
    elsif (user_input > secret_num)
      puts "Nah try for less?"
      user_input = gets.chomp.to_i
    end
  end  
  puts "Yahh~ it's #{secret_num} you got it right! ;)"
else
  while (user_input < 0 || user_input > 10) do
    puts "hmm..? what did you put in there?? try again!"
    user_input = gets.chomp.to_i
    if user_input >= min_num && user_input <= max_num
      while(user_input != secret_num) do
        if (user_input < secret_num)
          puts "Aww not quite, a lil more?"
          user_input = gets.chomp.to_i      
        elsif (user_input > secret_num)
          puts "Nah try for less?"
          user_input = gets.chomp.to_i
        end
      end
    end 
    puts "Yahh~ it's #{secret_num} you got it right! ;)"
  end
end

puts "ready for something more?"
puts "let's guess a number within your comfortable range!"
puts "First, gimme the minimum"
min_num = gets.chomp.to_i
puts "Gr8t! now maximum"
max_num = gets.chomp.to_i
puts "Throw me that secret number!!"
user_input = gets.chomp.to_i

secret_num = rand(min_num..max_num)

if user_input >= min_num && user_input <= max_num
  while(user_input != secret_num) do
    if (user_input < secret_num)
      puts "Aww not quite, a lil more?"
      user_input = gets.chomp.to_i      
    elsif (user_input > secret_num)
      puts "Nah try for less?"
      user_input = gets.chomp.to_i
    end
  end 

  puts "Yahh~ it's #{secret_num} you got it right! ;)"

else
  while (user_input < min_num || user_input > max_num) do
    puts "Duh! please put something within your range"
    user_input = gets.chomp.to_i
    if user_input >= min_num && user_input <= max_num
      while(user_input != secret_num) do
        if (user_input < secret_num)
          puts "Aww not quite, a lil more?"
          user_input = gets.chomp.to_i      
        elsif (user_input > secret_num)
          puts "Nah try for less?"
          user_input = gets.chomp.to_i
        end
      end
    end 
    puts "Yahh~ it's #{secret_num} you got it right! ;)"
  end
end