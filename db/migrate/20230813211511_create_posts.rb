class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :company_name
      t.string :industry
      t.string :title
      t.integer :salary
      t.string :experience_level
      t.string :location
      t.string :job_type
      t.string :benefits
      t.text :description

      t.timestamps
    end
  end
end
