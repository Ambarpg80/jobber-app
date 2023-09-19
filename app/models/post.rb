class Post < ApplicationRecord
    has_many :inquiries , dependent: :destroy
    has_many :users, through: :inquiries

    validates :company_name, :title, :location, :description, presence: true
end
