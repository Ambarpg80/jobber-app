class SessionsController < ApplicationController
   skip_before_action :authorized, only: [:create]
   

    def create #login Route
        user = User.find_by(email: params[:email]) 
         if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
         else
          render json: {error:  "Invalid Username or Password"}, status: :unauthorized
        end 
    end
  


    def destroy #logout
        session.delete :user_id
        head :no_content
    end

    
end
