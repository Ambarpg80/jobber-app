class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end


    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id]= user.id
          render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password, :confirm_password)
    end

end