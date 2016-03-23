class HomeController < ApplicationController

  def index

  end

  def results
    sudoku_string = Solver.make_string(params)
    @answer = sudoku_string
  end

end
