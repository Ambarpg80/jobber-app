class InquiriesController < ApplicationController
   
   def index
      render json: Inquiry.all, status: :ok
   end

   def create
      user= current_user
      new_inquiry = user.inquiries.create(inquiry_params)
        if new_inquiry.valid?
         render json: new_inquiry, status: :created
        else
         render json: {errors: [new_inquiry.errors.full_messages]}, status: :unprocessable_entity
      end
   end

   def update
      user = current_user
      inquiry = user.inquiries.find(params[:id])
      inquiry.update!(inquiry_params)
      if inquiry
         render json: inquiry, status: :accepted
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
