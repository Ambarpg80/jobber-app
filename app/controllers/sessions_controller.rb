class SessionsController < ApplicationController

    def create #login
        user = User.find_by(id: session[:user_id])
        if user&.authorize(params[:username])
          session[:user_id] = user.id
        render json: user, status: :ok
    else 
        render json: {error: "Not Authorized"}, status: :not_authorized
        end 
    end
    

    def destroy #logout
        session.delete :user_id
        head :no_content
    end
    
end
