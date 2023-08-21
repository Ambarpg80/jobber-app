class PostSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :industry, :title, :salary, :experience_level, :location, :job_type, :benefits, :description, :summary
  
  
 has_many :inquiries

 def summary
  " #{self.object.description[0..49]}..."
 end
end
