class InquirySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :email, :phone_number, :skills, :education, :about
  
  belongs_to :user
  belongs_to :post
end
