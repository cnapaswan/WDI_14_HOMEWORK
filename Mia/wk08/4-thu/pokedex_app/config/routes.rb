Rails.application.routes.draw do
  
  post '/api/create', to: 'pokemons#api_create'
  get '/api/all', to: 'pokemons#api_all'
  get '/pokemons/play', to: 'pokemons#play'
  resources :pokemons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
