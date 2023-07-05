# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb


# db/seeds.rb

airport1 = Airport.create!(name: 'Los Angeles International Airport', address: '1 World Way, Los Angeles, CA 90045', contact: '18002465211', rating: 4.1)
airport2 = Airport.create!(name: 'John F. Kennedy International Airport', address: 'Queens, NY 11430', contact: '17182444444', rating: 3.9)
airport3 = Airport.create!(name: 'Heathrow Airport', address: 'Longford, Hounslow TW6, UK', contact: '+44 844 335 1801', rating: 4.5)
airport4 = Airport.create!(name: 'Dubai International Airport', address: 'Dubai - United Arab Emirates', contact: '+971 4 224 5555', rating: 4.3)

# Create some users
user1 = User.create!(first_name: 'John', last_name: 'Doe', username: 'johndoe', email: 'johndoe@gmail.com', password: 'johndoe123')
user2 = User.create!(first_name: 'Jane', last_name: 'Doe', username: 'janedoe', email: 'janedoe@gmail.com', password: 'janedoe123')
user3 = User.create!(first_name: 'Alice', last_name: 'Smith', username: 'alicesmith', email: 'alicesmith@gmail.com', password: 'alicesmith123')

# Create some flights
flight1 = Flight.create!(origin: 'Los Angeles', destination: 'New York', date: DateTime.new(2023, 8, 29), departureTime: DateTime.new(2023, 8, 29, 9, 30), arrivalTime: DateTime.new(2023, 8, 29, 18, 00), flight_class: 'Economy', airport: airport1)
flight2 = Flight.create!(origin: 'New York', destination: 'Los Angeles', date: DateTime.new(2023, 8, 30), departureTime: DateTime.new(2023, 8, 30, 9, 30), arrivalTime: DateTime.new(2023, 8, 30, 18, 00), flight_class: 'Economy', airport: airport2)
flight3 = Flight.create!(origin: 'London', destination: 'New York', date: DateTime.new(2023, 9, 1), departureTime: DateTime.new(2023, 9, 1, 11, 00), arrivalTime: DateTime.new(2023, 9, 1, 19, 30), flight_class: 'Business', airport: airport3)
flight4 = Flight.create!(origin: 'Dubai', destination: 'London', date: DateTime.new(2023, 9, 5), departureTime: DateTime.new(2023, 9, 5, 13, 30), arrivalTime: DateTime.new(2023, 9, 5, 19, 45), flight_class: 'First Class', airport: airport4)

# Create some bookings
booking1 = Booking.create!(user: user1, flight: flight1)
booking2 = Booking.create!(user: user2, flight: flight2)
booking3 = Booking.create!(user: user3, flight: flight3)
booking4 = Booking.create!(user: user1, flight: flight4)

# Create some reviews
review1 = Review.create!(review: 'Great flight!', rating: 4.5, user: user1, airport: airport1)
review2 = Review.create!(review: 'Amazing service!', rating: 4.8, user: user2, airport: airport2)
review3 = Review.create!(review: 'Comfortable journey.', rating: 4.2, user: user3, airport: airport3)
review4 = Review.create!(review: 'Excellent facilities!', rating: 4.7, user: user1, airport: airport4)

