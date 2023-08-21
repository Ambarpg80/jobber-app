class InquiriesController < ApplicationController

    def index 
        submissions = Inquiry.all
        render json: submissions, status: :ok
    end

    def show 
        user = User.find(params[:id])
        render json: user.inquiries, status: :ok
    end

     def create
        post = User.find(session[:user_id])
        inquiry = user.inquiries.create(inquiry_params)
        if inquiry.valid?
        render json: inquiry, include: :user, status: :created
        else
            render json: {errors: inquiries.errors.full_messages}, status: :unprocessable_entity
        end
     end

     private

     def inquiry_params
        params_permit(:post_id, :user_id,:name, :address, :email, :phone_number, :skills, :education, :about)
     end
end
