class AddColumnToBlog < ActiveRecord::Migration[5.0]
  def change
    add_column :blogs, :created_by, :string
  end
end
