class PostsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
   
    def index 
        jobs = Post.all
        render json: jobs, status: :ok
    end

    def show
        job = Post.find(params[:id])
        render json: job, status: :ok
    end

    def create  
        user = User.find(params[:id])
        job_post = user.posts.create(job_params)
        render json: job_post, status: :created
    end

    def update
        job = Post.find(params[:id])
        job.update(job_params)
        render json: job, status: :accepted
    end

    def destroy
        job = Post.find(params[:id])
        job.delete
        head :no_content
    end

    private

    def job_params
       params.permit(:company_name, :industry, :title, :salary, :experience_level, :location, :job_type, :benefits, :description)
    end

   
end


    # params = {company_name: params[:company_name],
    # industry: params[:industry], 
    # title: params[:title], 
    # salary: params[:salary], 
    # experience_level: params[:experience_level], 
    # location: params[:location],
    # job_type: params[:job_type], 
    # benefits: params[:benefits],
    # description: params[:description]}