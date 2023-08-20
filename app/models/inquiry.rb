class Inquiry < ApplicationRecord
  belongs_to :user
  belongs_to :post

  validates :name, :email, :phone_number, :education, :about, presence: true
end
