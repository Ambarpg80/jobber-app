class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest
  
  has_many :inquiries
  has_many :posts, through: :inquiries
end
