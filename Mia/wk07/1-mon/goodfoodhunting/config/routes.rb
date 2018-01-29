Rails.application.routes.draw do
  

                #(((controller #file&method)))
  #get '/', to: 'pages#home'
                      #(((home is the method)))
  #get '/about', to: 'pages#about'

  #get '/dishes/:id', to: 'dishes#show'
  #get '/dishes', to: 'dishes#index'
  #get '/dishes/new', to: 'dishes#new'
  #post '/dishes', to: 'dishes#create'

  #delete 'dishes/:id', to: 'dishes#destroy'
  #put '/dishes/:id',to: 'dishes#update'

  #ET '/dishes/:id/edit', to: 'dishes#edit'  

  #to overwrite the dafault route out lines top of it
  resources :dishes
  #^ get all the routes for us check below
  #http://localhost:3000/rails/info/routes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



end
