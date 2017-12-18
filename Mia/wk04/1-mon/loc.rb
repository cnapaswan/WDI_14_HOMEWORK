#please use dummy_for_loc.txt to test :)
lineCount = 0
puts "Enter filename: "
file = gets.chomp
File.readlines(file).each do |line|
  lineCount += 1
end

if lineCount == 1
  puts "#{lineCount} line"
else
  puts "#{lineCount} lines"
end