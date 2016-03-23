class HomeController < ApplicationController

  def index

  end

  def results
    sudoku_string = Solver.make_string(params)
    @answer = Solver.solve(sudoku_string)
  end

end
