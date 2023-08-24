class InquiriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    def index 
        submissions = Inquiry.all
        render json: submissions, status: :ok
    end

    def show 
        user = User.find(params[:id])
        render json: user.inquiries, status: :ok
    end

     def create
        user = current_user
        inquiry = user.inquiries.create(inquiry_params)
        if inquiry.valid?
        render json: inquiry, include: :user, status: :created
        end
     end

     private

     def inquiry_params
        params_permit(:post_id, :user_id,:name, :address, :email, :phone_number, :skills, :education, :about)
     end
end
