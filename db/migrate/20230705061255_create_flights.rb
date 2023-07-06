class CreateFlights < ActiveRecord::Migration[7.0]
  def change
    create_table :flights do |t|
      t.string     :origin
      t.string     :destination
      t.datetime   :date
      t.datetime   :departureTime
      t.datetime   :arrivalTime
      t.string     :flight_class
      t.float      :price, precision: 2
      t.references :airport, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
