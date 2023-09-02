class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    

    def index 
        users = User.all
        render json: users, include: [:posts, :inquiries], status: :ok
    end

    def show # /me Route
        user = current_user
        if user
        render json: user, include: [:posts, :inquiries], status: :ok
        end
    end


    def create  #signup Route
        user = User.create!(user_params)
        if user.valid?
            session[:user_id]= user.id
          render json: user, status: :created
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_confirmation)
    end


end