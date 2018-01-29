Rails.application.routes.draw do

  root "houses#index"
  #get '/house/:id', to: 'houses#show'
  #get '/houses', to: 'houses#index'
  post '/students/new', to: 'students#post'
  resources :houses, only: [:index, :show]
  resources :students, only: [:index, :show, :new]

end



     