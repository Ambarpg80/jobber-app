class User < ApplicationRecord
    has_many :inquiries 
    has_many :posts, through: :inquiries
    has_secure_password

    validates :email, presence: true, uniqueness: true
    validates :password, confirmation: true, presence: true
    validates :name, :password_confirmation, presence: true
end
