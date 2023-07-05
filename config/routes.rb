# Rails.application.routes.draw do
#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
#   #index, show, destroy, create, 
#   resources :reviews,  only: [:index, :show, :destroy, :create, :update]
#   resources :users,    only: [:index, :show, :destroy, :create, :update]
#   resources :flights,  only: [:index, :show, :destroy, :create, :update]
#   resources :airports, only: [:index, :show, :destroy, :create, :update]
#   resources :bookings, only: [:index, :show, :destroy, :create, :update]
#   # Defines the root path route ("/")
#   # root "articles#index"
# end


Rails.application.routes.draw do
  # resources :airports, only: [:index]

  resources :users do
    resources :flights, only: [:index]
  end

  resources :users do
    resources :reviews, only: [:index]
  end

  resources :airports do
    resources :flights, only: [:index]
  end

end