

class User < ApplicationRecord
    has_many :inquiries
    has_many :posts, through: :inquiries
    has_secure_password

    #validates :username, presence: true, uniqueness: true
    #validates :name, presence: true
end
