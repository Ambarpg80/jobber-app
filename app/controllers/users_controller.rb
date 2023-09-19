class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def index
      render json: User.all, status: :ok
    end


    def show # /me Route
        user = current_user
        if user
        render json: user, status: :ok
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
        if user
          render json: user, status: :accepted
        end
    end
    
    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end


end