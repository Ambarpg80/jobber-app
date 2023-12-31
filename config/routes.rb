Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  resources :posts, only: [:index, :create, :show, :update, :destroy]         #shows all the posts       
  resources :users, only: [:index, :update]  #update user info
  resources :inquiries, only: [:index, :create, :update, :destroy]

  get "/me", to: "users#show"          #automatically signs user in
  post "/signup", to: "users#create"    #creates a user account
  
  post "/login", to: "sessions#create"   #creates a session- logs user in
  delete "/logout", to: "sessions#destroy" #deletes session_id - logs user out
  

 
  
  

end
