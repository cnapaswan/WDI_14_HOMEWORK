class Phone
  def initialize(inputnumber)
    @number = inputnumber
  end
  def number
    clean = @number.gsub(/[\s()-.]/, "")
    return clean if clean.length == 10
    return "0" * 10 if clean.length > 11 || clean.length < 10

    if clean.length == 11 && clean[0] == "1"
      clean[0] = ""
      return clean
    else
      return "0" * 10
    end
  end
  def area_code
    @number[0...3]
  end
  def to_s
    number
    return "(#{@number[0...3]}) #{@number[3...6]}-#{@number[6...11]}"
  end  
end
