class Post < ApplicationRecord
    has_many :inquiries
    has_many :users, through: :inquiries

    #validates
end
