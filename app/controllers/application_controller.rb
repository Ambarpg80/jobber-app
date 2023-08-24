class ApplicationController < ActionController::Base
    include ActionController::Cookies 
    before_action :authorized
    rescue_from ActiveRecord::RecordInvalid, with: :render_not_authorized_error
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found



    private
    def current_user
        current_user = User.find_by(id: session[:user_id])
    end 

    def authorized
        return render json: { error: "Not Authorized" }, status: :unauthorized unless @current_user
    end

    def render_not_authorized
        user = current_user
        render json: {errors: [user.errors.full_messages]}, status: :unauthorized
    end

    def render_unprocessable_entity
        user = current_user
        render json: {errors: [user.errors.full_messages]}, status: :unprocessable_entity
    end

   def render_not_found
    user = current_user
    render json: {errors: [user.errors.full_messages]}, status: :not_found
   end
end
