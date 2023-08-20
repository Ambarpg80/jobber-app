class InquirySerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :name, :address, :email, :phone_number, :skills, :education, :about
  
  belongs_to :user
  belongs_to :post
end
