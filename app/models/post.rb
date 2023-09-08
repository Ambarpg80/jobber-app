class Post < ApplicationRecord
     has_many :inquiries 
    has_many :users, through: :inquiries

    validates :company_name, :title, :location, :description, presence: true
end
