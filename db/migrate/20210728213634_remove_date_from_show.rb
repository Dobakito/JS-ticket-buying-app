class RemoveDateFromShow < ActiveRecord::Migration[6.1]
  def change
    remove_column :shows, :date
  end
end
