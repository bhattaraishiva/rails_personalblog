class ChangeDataTypeForBlog < ActiveRecord::Migration[5.0]
  def change
    change_column :blogs, :paragraph, :text
  end
end
