Rails.application.routes.draw do
  #Index user flights
  get '/user_flights',           to: 'flights#user_flights'
  get '/users/:user_id/flights', to: 'flights#user_flights'


  #Show user flights
  get '/user_flights/:flight_id',          to: 'flights#user_flight'
  get '/users/:user_id/flights/:flight_id', to: 'flights#user_flight'


  #index airport flights
  get '/airport_flights',              to: 'flights#airport_flights'
  get '/airports/:airport_id/flights', to: 'flights#airport_flights'


  #Index user reviews
  get '/user_reviews', to: 'reviews#user_reviews'
  get '/users/:user_id/reviews', to:'reviews#user_reviews'


  #Index airport reviews
  get '/airport_reviews',             to: 'reviews#user_reviews'
  get '/airport/:airport_id/reviews', to:'reviews#user_reviews'

  # user_signup
  post '/signup', to: "users#create"
  # current user
  get '/me', to: "users#show"


  post '/login', to:"session#create"
  delete '/logout', to:"session#destroy"




  resources :reviews
  resources :users
  resources :flights
  resources :airports
  resources :bookings


  # resources :users do
  #   resources :flights, only: [:index]
  # end

  # resources :users do
  #   resources :reviews, only: [:index]
  # end

  # resources :airports do
  #   resources :flights, only: [:index]
  # end

end