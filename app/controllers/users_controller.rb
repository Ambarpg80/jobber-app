class UsersController < ApplicationController
    skip_before_action :authorized, only: :create


    def show # /me Route
        user = current_user
        if user
        render json: user, include: [:posts, :inquiries], status: :ok
        end
    end


    def create  #signup Route
        user = User.create(user_params)
        if user.valid?
            session[:user_id]= user.id
          render json: user, status: :created
        else 
          render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update #update user info
        user = current_user
        user.update(user_params)
        if user.valid?
          render json: user, status: :accepted
        end
    end
    
    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end


end