class InquiriesController < ApplicationController
   #  skip_before_action :authorized, only: :show
    
    
    def index 
        submissions = Inquiry.all
        render json: submissions, status: :ok
    end

    def show 
        user = current_user
        render json: user.inquiries, include: :post, status: :ok
    end

     def create
        user = current_user
        inquiry = user.inquiries.create(inquiry_params)
        if inquiry.valid?
        render json: inquiry, status: :created
        end
     end

     def destroy
        user = current_user
        inquiry =  Inquiry.find_by(id: params[:id])
        inquiry.destroy
        head :no_content
     end

     private

     def inquiry_params
        params.permit(:post_id, :user_id,:name, :address, :email, :phone_number, :skills, :education, :about)
     end
end
