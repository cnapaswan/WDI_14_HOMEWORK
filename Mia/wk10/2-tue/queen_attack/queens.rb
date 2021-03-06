class Queens
  def initialize(options={})
    if options != {}
      if options[:white] != options[:black]
        @white = options[:white]
        @black = options[:black]
      else
        raise(ArgumentError)
      end
    else 
      @white = [0, 3]
      @black = [7, 3]
      @board
    end    
  end

  def white
    @white
  end

  def black
    @black
  end

  def boardgen
    boardline = "O " * 8
    @board = (boardline.strip + "\n") * 7 + boardline.strip 
  end

  def to_s
    boardgen
    @board[24] = "x"

    
  end



end