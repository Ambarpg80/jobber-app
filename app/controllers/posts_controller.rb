class PostsController < ApplicationController
    skip_before_action :authorized, only: :index
    
   
    def index 
        jobs = Post.all
        render json: jobs,  status: :ok
    end 

    def show
        single_job = Post.find(params[:id])
        render json: single_job, status: :ok
    end

    def create  
        new_post = Post.create(job_params)
        if new_post.valid?
           render json: new_post, status: :created
          end
    end

    def update
        job = Post.find(params[:id])
        job.update!(job_params)
        if job
        render json: job, status: :accepted
        end
    end

    def destroy
        job = Post.find(params[:id])
        job.destroy
        head :no_content
    end

    private

    def job_params
       params.permit(:company_name, :industry, :title, :salary, :experience_level, :location, :job_type, :benefits, :description)
    end

   
end


