Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "posts#index"                      
  get "/posts", to: "posts#index"         #shows all the posts
  post "/posts", to: "posts#create"       #creates a job post
  get "/show_post", to: "posts#show"      #gets a single post
  patch "/posts/:id", to: "posts#update"
  delete "/posts/:id", to: "posts#destroy"

  # get "/users", to: "users#index"         #gets all the users
  get "/me", to: "users#show"          #automatically signs user in
  post "/signup", to: "users#create"    #creates a user account
  
  post "/login", to: "sessions#create"   #creates a session- logs user in
  delete "/logout", to: "sessions#destroy" #deletes session_id - logs user out
  
  get "/posts/login", to: "inquiries#login_to_apply"
  get "/inquiries", to: "inquiries#index"               #shows all inquiries(job_applications)
  post "/inquiries", to: "inquiries#create"             #create inquiry(job_application)
  # get "/me/inquiries", to: "inquiries#show" #show one inquiry
  delete "/me/inquiries/:id", to: "inquiries#destroy"      
  

end
