class InquiriesController < ApplicationController


     def create
        inquiry = Inquiry.create(inquiry_params)
        if inquiry.valid?
        render json: inquiry, status: :created
        end
     end

     def destroy
        inquiry = Inquiry.find_by(id: params[:id])
        inquiry.destroy
        head :no_content
     end

     private

     def inquiry_params
        params.permit(:post_id, :user_id, :name, :address, :email, :phone_number, :skills, :education, :about)
     end
end
