class SessionsController < ApplicationController
   skip_before_action :authorized, only: [:create]
   

    def create #login Route
        user = User.find_by(username: params[:username]) 
         if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
         else
          render json: {error: "User Not Authorized"}
        end 
    end
  


    def destroy #logout
        session.delete :user_id
        head :no_content
    end

    
end
