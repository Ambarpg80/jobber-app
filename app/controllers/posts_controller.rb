class PostsController < ApplicationController
    wrap_parameters format: []
   
    def index 
        jobs = Post.all
        render json: jobs, status: :ok
    end

    def show
        job = Post.find(params[:id])
        render json: job,include: [:users, :inquiries], status: :ok
    end

    def create 
        job_post = Post.create(post_params)
        render json: post_params, status: :created
    end

    def update
        job = Post.find(params[:id])
        job.update(post_params)
        render json: job, status: :accepted
    end

    def destroy
        job = Post.find(params[:id])
        job.delete
        head :no_content
    end


end
