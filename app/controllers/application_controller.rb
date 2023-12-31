class ApplicationController < ActionController::API
    include ActionController::Cookies 
    before_action :authorized
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found



    private
    def current_user
       User.find_by(id: session[:user_id])
    end 

    def authorized
        user = current_user
        return render json: { error: "Not Authorized. Please Login or Sign up" }, status: :unauthorized unless user
    end

    def render_unprocessable_entity(exception)
        # user = current_user
        render json: {errors: [exception.record.errors.full_messages]}, status: :unprocessable_entity
    end

   def render_not_found(exception)
    render json: {errors: [exception.message]}, status: :not_found
   end
end
