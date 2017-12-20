puts "i'm a Crappy Calculator!"
puts "please put something according to the usual calculation format"
puts '"number" "operator" "number"'
puts "just like 2 + 2, 3 - 2 or 4 * 3"  
puts "choice of operators are +, -, *, /, p, s"
puts "p is for power and s is for sqrt"

more = "y"

while more == "y"

  puts "you know the drill"
  oper_choice = gets.chomp.gsub(/\s+/, "")

  if oper_choice.include?("+")
    num_arr = oper_choice.split("+")
    puts num_arr[0].to_i + num_arr[1].to_i
  elsif oper_choice.include?("-")
    num_arr = oper_choice.split("-")
    puts num_arr[0].to_i - num_arr[1].to_i
  elsif oper_choice.include?("*")
    num_arr = oper_choice.split("*")
    puts num_arr[0].to_i * num_arr[1].to_i
  elsif oper_choice.include?("/")
    num_arr = oper_choice.split("/")
    puts num_arr[0].to_i / num_arr[1].to_i
  elsif oper_choice.include?("p")
    num_arr = oper_choice.split("p")
    puts num_arr[0].to_i ** num_arr[1].to_i
  elsif oper_choice.include?("s")
    num_arr = oper_choice.split("s")
    puts Math.sqrt(num_arr[0].to_i)
  else
    puts "what are you trying to do?"
  end

  puts "keep goin? (y/n)"
  more = gets.chomp

end




