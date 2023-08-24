class User < ApplicationRecord
    has_many :inquiries , dependent: :destroy
    has_many :posts, through: :inquiries
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, confirmation: true
    validates :name, :password_confirmation, presence: true
end
