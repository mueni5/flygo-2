# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_05_061339) do
  create_table "airports", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "contact"
    t.string "image"
    t.float "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "flight_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flight_id"], name: "index_bookings_on_flight_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "flights", force: :cascade do |t|
    t.string "origin"
    t.string "destination"
    t.datetime "date"
    t.datetime "departureTime"
    t.datetime "arrivalTime"
    t.string "flight_class"
    t.float "price"
    t.integer "airport_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["airport_id"], name: "index_flights_on_airport_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "review"
    t.float "rating"
    t.integer "user_id", null: false
    t.integer "airport_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["airport_id"], name: "index_reviews_on_airport_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "bookings", "flights"
  add_foreign_key "bookings", "users"
  add_foreign_key "flights", "airports"
  add_foreign_key "reviews", "airports"
  add_foreign_key "reviews", "users"
end
