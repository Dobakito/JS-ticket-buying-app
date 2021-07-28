class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string :artist
      t.datetime :date
      t.string :venue
      t.string :image
      t.integer :tickets_left
      t.references :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
