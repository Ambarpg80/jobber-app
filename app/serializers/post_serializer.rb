class PostSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :industry, :title, :salary, :experience_level, :location, :job_type, :benefits, :description 
  
  
  has_many :users, through: :inquiries
end
