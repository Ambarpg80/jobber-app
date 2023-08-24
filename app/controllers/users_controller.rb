class UsersController < ApplicationController
    skip_before_action :authorized, only: [:index, :create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    

    def index 
        users = User.all
        render json: users, include: [:posts, :inquiries], status: :ok
    end

    def show # /me Route
        user = find_user
        if user
        render json: user, status: :ok
        end
    end


    def create  #signup Route
        user = User.create!(user_params)
        byebug
        if user.valid?
            session[:user_id]= user.id
          render json: user, status: :created
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_confirmation)
    end

    def find_user
        User.find_by(id: session[:user_id])
    end

end