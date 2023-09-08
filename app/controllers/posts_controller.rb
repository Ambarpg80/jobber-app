class PostsController < ApplicationController
    skip_before_action :authorized, only: :index
    
   
    def index 
        jobs = Post.all
        render json: jobs,  status: :ok
    end 

    private

    def job_params
       params.permit(:company_name, :industry, :title, :salary, :experience_level, :location, :job_type, :benefits, :description)
    end

   
end


