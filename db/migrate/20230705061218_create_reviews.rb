class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :review
      t.float :rating
      t.references :user, null: false, foreign_key: true
      t.references :airport, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
