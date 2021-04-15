class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :image_url
      t.string :title
      t.decimal :popularity
      t.string :synopsis
      t.string :genre
      t.string :language
      t.integer :duration
      t.string :slug

      t.timestamps
    end
  end
end
