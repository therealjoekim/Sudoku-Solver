class CreateSolvers < ActiveRecord::Migration
  def change
    create_table :solvers do |t|

      t.timestamps null: false
    end
  end
end
