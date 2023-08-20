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
        user = User.find(params[:id])
        inquiry = user.inquiries.create(inquiry_params)
        render json: inquiry, status: :created
     end

     private

     def inquiry_params
        params_permit(:post_id, :user_id,:name, :address, :email, :phone_number, :skills, :education, :about)
     end
end
