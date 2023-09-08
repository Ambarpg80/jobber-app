Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
                   
  get "/posts", to: "posts#index"         #shows all the posts
  
  patch "/users/:id", to: "users#update" #update user info
  get "/me", to: "users#show"          #automatically signs user in
  post "/signup", to: "users#create"    #creates a user account
  
  post "/login", to: "sessions#create"   #creates a session- logs user in
  delete "/logout", to: "sessions#destroy" #deletes session_id - logs user out
  
  post "/inquiries", to: "inquiries#create"             #create inquiry(job_application)
  delete "/inquiries/:id", to: "inquiries#destroy"     #delete inquiry belonging to user(withdraws application) 
  

end
