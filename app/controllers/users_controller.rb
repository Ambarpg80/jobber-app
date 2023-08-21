class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def index 
        users = User.all
        render json: users,include: [:posts, :inquiries], status: :ok
    end

    def show
        user = User.find(session[:user_id])
        if user
        render json: user, status: :ok
        else render json: {error: "Not Authorized"}, status: :unauthorized
        end
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