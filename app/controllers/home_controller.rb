class HomeController < ApplicationController

  def index

  end

  def results
    sudoku_string = Solver.make_string(params)
    # if sudoku cannot complete will timeout after 1 second
    begin
    	@result = Timeout::timeout(1) do
		    @answer = Solver.solve(sudoku_string)
	        if request.xhr?
		    	render :json => @answer
		    end
    	end
    rescue Timeout::Error
    	# flash[:alert] = "The Sudoku Board is invalid. Please reset and try again."
    	# puts "error"
    	render js: "alert('The Sudoku Board is invalid. Please reset and try again.');"
    	# redirect_to root_path
    end
    # if request.xhr?
    # 	render :json => @answer
    # end
  end

end
