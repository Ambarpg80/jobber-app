class SessionsController < ApplicationController
   skip_before_action :authorized, only: [:create]
   rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create #login Route
        user = User.find_by(username: params[:username]) 
         byebug
         if user&.authenticate(params[:password])
           
          session[:user_id] = user.id
        
            render json: user, status: :created
        end 
    end
    

    def destroy #logout
        session.delete :user_id
        head :no_content
    end


    private
    
end
