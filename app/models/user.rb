class User < ApplicationRecord
  has_many :reviews
  has_many :bookings
  has_many :flights, through: :bookings
  has_secure_password
end