class User < ApplicationRecord
  has_many :reviews
  has_many :bookings
  has_many :flights, through: :bookings
  has_secure_password


  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 4}
  validates :first_name, presence: true
  validates :last_name, presence:true
end