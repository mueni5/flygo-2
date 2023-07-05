# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb


# db/seeds.rb


# Create more airports
# db/seeds.rb

# Create some airports
airport1 = Airport.create(name: 'Los Angeles International Airport', address: '1 World Way, Los Angeles, CA 90045', contact: '18002465211', rating: 4.1)
airport2 = Airport.create(name: 'John F. Kennedy International Airport', address: 'Queens, NY 11430', contact: '17182444444', rating: 3.9)

# Create some users
user1 = User.create(first_name: 'John', last_name: 'Doe', username: 'johndoe', email: 'johndoe@gmail.com', password: 'johndoe123')
user2 = User.create(first_name: 'Jane', last_name: 'Doe', username: 'janedoe', email: 'janedoe@gmail.com', password: 'janedoe123')

# Create some flights
flight1 = Flight.create(origin: 'Los Angeles', destination: 'New York', date: DateTime.new(2023, 8, 29), departureTime: DateTime.new(2023, 8, 29, 9, 30), arrivalTime: DateTime.new(2023, 8, 29, 18, 00), class: 'Economy', airport: airport1)
flight2 = Flight.create(origin: 'New York', destination: 'Los Angeles', date: DateTime.new(2023, 8, 30), departureTime: DateTime.new(2023, 8, 30, 9, 30), arrivalTime: DateTime.new(2023, 8, 30, 18, 00), class: 'Economy', airport: airport2)

# Create some bookings
booking1 = Booking.create(user: user1, flight: flight1)
booking2 = Booking.create(user: user2, flight: flight2)

# Create some reviews
review1 = Review.create(review: 'Great flight!', user: user1, airport: airport1)
review2 = Review.create(review: 'Amazing service!', user: user2, airport: airport2)
