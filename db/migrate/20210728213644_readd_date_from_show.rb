class ReaddDateFromShow < ActiveRecord::Migration[6.1]
  def change
    add_column :shows, :date, :string
  end
end
