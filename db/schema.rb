# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_13_211533) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "inquiries", force: :cascade do |t|
    t.string "name"
    t.text "address"
    t.string "email"
    t.text "phone_number"
    t.string "skills"
    t.string "education"
    t.text "about"
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_inquiries_on_post_id"
    t.index ["user_id"], name: "index_inquiries_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "company_name"
    t.string "industry"
    t.string "title"
    t.string "salary"
    t.string "experience_level"
    t.string "location"
    t.string "job_type"
    t.string "benefits"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "inquiries", "posts"
  add_foreign_key "inquiries", "users"
end
