puts 'Starting DB Seed!'

cc= Post.create(company_name: "Coca-Cola",
                industry:  "Food and Beverages",
                title: "Field Service Installer", 
                salary: 49, 
                experience_level: "Entry Level", 
                location: "Multiple Locations-Travel Required", 
                job_type: "Full-time",  
                benefits: "Medical/ Dental, 401K", 
                description: "License required. Requires travelling from location to location to service machines.")
ucf = Post.create(company_name: "University Central Florida",
                  industry:  "Higher Education",
                  title: "IT Support II ", 
                  salary: 85, 
                  experience_level: "Mid Level", 
                  location: "University Campuses", 
                  job_type: "Full-time", 
                  benefits: "Medical/ Dental, 401K, Unlimited PTO", 
                  description: "Support staff and students. Supervise staff.")
bhs = Post.create(company_name: "Bowling High School",
                  industry:  "Education",
                  title: "Clerk Typist", 
                  salary: 35, 
                  experience_level: "Entry Level", 
                  location: "School Office", 
                  job_type: "Part-time", 
                  benefits: "Medical/ Dental , 401K", 
                  description: "Mostly filing and typing")
fs = Post.create(company_name: "Full-Stop Insurance",
                 industry:  "Insurance Providers",
                 title: "Claims Adjuster", 
                 salary: 70,
                 experience_level: "Mid Level", 
                 location: "In-Office", 
                 job_type: "Full-time", 
                 benefits: "Medical/ Dental, 401K, Unlimited PTO ", 
                 description: "Assist with claims adjustment")


kim = User.create(name: "Kimberly Tussaud" ,
                  username: "some1@example.com", 
                  password: "123" )
john = User.create(name: "John Hambrecht" ,
                  username: "some2@example.com", 
                  password: "123") 
elena = User.create(name: "Elena Cielos" ,
                  username: "some3@example.com", 
                  password: "123") 
alex = User.create(name: "Alexander Dunbar" ,
                  username: "some4@example.com", 
                  password: "123") 


Inquiry.create(post_id: cc.id, 
               user_id: kim.id, 
               name: "Kimberly Tussaud",
               address: "1223 Sesame Dr., Lutz,  FL  34473",
               email: "some1@example.com",
               phone_number: "808-646-0435",
               skills: "Installation and equipment repair of electronics",
               education:  "HS Diploma",
               about: "Recent HS graduate looking to start an administrative career."
)

Inquiry.create(post_id: ucf.id, 
               user_id: alex.id, 
               name: "Alexander Dunbar",
               address: "1725 Orange Blvd., Winter Garden,  FL  32823",
               email: "some4@example.com",
               phone_number:  "618-345-0663",
               skills: "MS Office suite, Azure, onboarding computers, network administration",
               education:  "BS Computer Science",
               about: " Looking to lead techs who want to level up."
)
Inquiry.create(post_id: bhs.id, 
               user_id: elena.id, 
               name: "Elena Cielos",
               address: "9827 Sandboard Ave., Apopka,  FL  32734",
               email: "some3@example.com",
               phone_number: "543-445-1422",
               skills: "MS Office suite",
               education:  "HS Diploma",
               about: "Recent HS graduate looking to start an administrative career."
)

Inquiry.create(post_id: fs.id, 
               user_id: john.id, 
               name: "John Hambrecht",
               address: "16601 International Dr., Gotha,  FL  32852",
               email: "some2@example.com",
               phone_number:  "748-746-0183",
               skills: "Microsoft Excel, Book-keeping",
               education:  "MS Accounting",
               about: "Freelance book-keeper looking for a change of pace. "
)
                 
puts 'Done Seeding!'
