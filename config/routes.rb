Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "posts#index"                      
  get "/posts", to: "posts#index"         #shows all the posts
  post "/posts", to: "posts#create"       #creates a job post
  get "/posts/:id", to: "posts#show"      #gets a single post
  patch "/posts/:id", to: "posts#update"
  delete "/posts/:id", to: "posts#destroy"

  get "/users", to: "users#index"         #gets all the users
  get "/me", to: "users#show"          #automatically signs user in
  post "/signup", to: "users#create"    #creates a user account
  
  post "/login", to: "sessions#create"   #creates a session- logs user in
  delete "/logout", to: "sessions#destroy" #deletes session_id - logs user oiut

  get "/inquiries", to: "inquiries#index"               #shows all inquiries(job_applications)
  post "post/:id/inquiries", to: "inquiries#create"             #create inquiry(job_application)
  get "/users/:id/inquiries/:id", to: "inquiries#show"      #show one inquiry
  

end
