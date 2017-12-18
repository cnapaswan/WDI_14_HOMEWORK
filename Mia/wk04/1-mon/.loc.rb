puts "Enter filename: "
file = gets.chomp
File.readlines(file).each do |line|
  puts line
end