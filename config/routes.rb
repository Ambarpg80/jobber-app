Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "posts#index"                      #shows all the posts
  # get "/posts", to: "posts#index"
  post "/posts", to: "posts#create"       #creates a job post
  get "/posts/:id", to: "posts#show"      #gets a single post
  patch "/posts/:id", to: "posts#update"
  delete "/posts/:id", to: "posts#destroy"

  get "/users", to: "users#index"         #gets all the users
  get "/users/:id", to: "users#show"      #gets a single user
  # get "/me", to: "users#show"           #gets current user

  
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"

  get "/inquiries", to: "inquiries#index"               #shows all inquiries(job_applications)
  post "/inquiries", to: "inquiries#create"             #create inquiry(job_application)
  get "/users/:id/inquiries", to: "inquiries#show"      #show one inquiry
  post "/users/:id/inquiries", to: "inquiries#create"   #create an inquiry

end
