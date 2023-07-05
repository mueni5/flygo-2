class Airport < ApplicationRecord
  has_many :reviews
  has_many :flights
end
