Rails.application.routes.draw do
 

  
  resources :likes
  get '/', to: 'pages#home'
  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  get '/projects/new', to: 'projects#new' #show the form
  post '/projects', to: 'projects#create'
  get '/projects/:id', to: 'projects#show'
  post '/comments', to: 'comments#create'


  resources :comments
  resources :projects# => , only: [:new, :create]
  resources :users
end
