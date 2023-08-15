class CreateInquiries < ActiveRecord::Migration[7.0]
  def change
    create_table :inquiries do |t|
      t.string :name
      t.text :address
      t.string :email
      t.text :phone_number
      t.string :skills
      t.string :education
      t.text :about
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
