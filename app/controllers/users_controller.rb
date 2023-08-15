class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find_by(params[:id])
        render json: user, status: :ok
    end

    # def show
    #     user = User.find_by(id: session[:user_id])
    # if user
    #     render json: user, status: :ok
    # else 
    #     render json: {error: "Not Authorized"}, status: :not_authorized
        # end 
    # end

    private

    def user_params
        params.permit(:name, :username, :password, :confirm_password)
    end

end