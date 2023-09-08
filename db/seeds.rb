puts 'Starting DB Seed!'

cc= Post.create(company_name: "Coca-Cola",
                industry:  "Food and Beverages",
                title: "Field Service Installer", 
                salary: "$40-49K ", 
                experience_level: "Entry Level", 
                location: "Multiple Locations-Travel Required", 
                job_type: "Full-time",  
                benefits: "Medical/ Dental, 401K", 
                description: "License required. Requires travelling from location to location to service machines. Coke Florida is looking for Field Service Installer based out of our Sarasota location. This position will have a Monday-Friday schedule, 6:00am-2:30pm shift with a need for occasional evening and weekend work. What You Will Do: As a Coke Florida Field Service Installer, you will be responsible for performing installations, removals and relocations of fountain equipment at customer accounts. Performs installations, removals relocations, surveys and basic service of fountain equipment. Responsible for performing electrical and mechanical services on fountain dispensing equipment. Maneuver equipment in order to perform all mechanical services on fountain equipment including preventative maintenance. Maintain positive customer relationships. Prepare/Install equipment in accordance with company standards. Maintain on-vehicle parts inventory and order new supplies as needed. Maintain and complete required paperwork, such as work tickets, parts list, electronic surveys, work order close-outs, etc.")

ucf = Post.create(company_name: "TLC Enginnering Solutions",
                  industry:  "Technology",
                  title: "IT Support II ", 
                  salary: "$85K", 
                  experience_level: "Mid Level", 
                  location: "In-Office, Hybrid", 
                  job_type: "Full-time", 
                  benefits: "Medical/ Dental, 401K, Unlimited PTO", 
                  description: "We are looking for a talented teammate that has at least 6+ Months of IT Help Desk experience using Autodesk or a similar software application and has experience monitoring a network for virus and spyware threats. It would be ideal if you have provided network administrator support or backup. If this sounds like the role for you and you're ready to join an amazing team, please apply! TLC Engineering Solutions (TLC) is consistently ranked among the largest multidiscipline firms in the country for the built environment. We have over 450+ highly qualified professionals in 19 offices and have grown a bit since our start in 1955! We know that our team is our success, and their growth this year has landed TLC as a Hot 2023 firm. Even more importantly, TLC was named as one of the “Best Firms” based upon the feedback of our staff for six years running! Thank you!")

bhs = Post.create(company_name: "University of Central Florida",
                  industry:  "Education",
                  title: "Transcriptionist", 
                  salary: "$35,000", 
                  experience_level: "Entry Level", 
                  location: "Orlando Campus", 
                  job_type: "Part-time", 
                  benefits: "Medical/ Dental , 401K", 
                  description: "If you're looking for the chance to learn, grow, and make a contribution to the community, look at employment opportunities with Full Sail University. You'll find your choice of career opportunities, great benefits, an environment that welcomes and values creativity, and a work experience that is both challenging and rewarding! If you're looking for the chance to learn, grow, and make a contribution to the community, look at employment opportunities with Full Sail University. You'll find your choice of career opportunities, great benefits, an environment that welcomes and values creativity, and a work experience that is both challenging and rewarding! Perform real-time captioning services and post-production transcription services for Deaf and hard-of-hearing students. This is a full-time position, 40 hours/week, with some evening and/or weekend availability needed for live lectures, which can occur between the hours of 9:00 a.m. to 9:00 p.m. Monday-Saturday.")
                
fs = Post.create(company_name: "Full-Stop Insurance",
                 industry:  "Insurance Providers",
                 title: "Liability Claims Examiner", 
                 salary: "$60,000/yr-75,000/yr",
                 experience_level: "Mid Level", 
                 location: "In-Office", 
                 job_type: "Full-time", 
                 benefits: "Medical/ Dental, 401K, Unlimited PTO ", 
                 description: "Our claims department is currently seeking a Liability Claims Examiner to handle commercial liability insurance claims. The ideal candidate for this position will have a background in commercial liability insurance and will be comfortable working independently while maintaining regular contact with other team members. Knowledge and experience with construction defect claims is preferred. Description: Investigates and manages commercial general liability claims; specifically, complex construction defect claims; Interprets policy coverage and determines if and how coverage applies to submitted claims; Sets reserves and authorizes payment within scope of authority, effectively resolving claims in a cost-effective manner and ensuring timely issuance of disbursements; Coordinates and manages fact investigations and evaluates claims and lawsuits through contact with insureds, claimants, witnesses and vendors; Utilizes negotiating skills to resolve claims; Works with attorneys, account representatives, agents and insureds regarding the handling and/or disposition of claims; Analyzes claim activity and provides data for management reports; and, Keeps current on state/territory regulations as well as industry activity and trends.")

40.times do 
    Post.create(company_name: Faker::Company.name,
        industry: Faker::Company.industry,
        title: Faker::Job.title, 
        salary: "$#{Faker::Number::between(from:35,to:200)}K",
        experience_level: ["Mid Level", "Entry-Level", "Senior-Level"].sample, 
        location: Faker::Address::city,
        job_type: ["Full-time", "Part-time"].sample, 
        benefits: "Medical/ Dental, 401K, Unlimited PTO", 
        description: Faker::Lorem::paragraph(sentence_count: 10)
    )
end

kim = User.create(name: "Kimberly Tussaud" ,
                  email: "some1@example.com", 
                  password: "123" ,
                  password_confirmation: "123")
john = User.create(name: "John Hambrecht" ,
                  email: "some2@example.com", 
                  password: "123" ,
                  password_confirmation: "123")
elena = User.create(name: "Elena Cielos" ,
                  email: "some3@example.com", 
                  password: "123",
                  password_confirmation: "123") 
alex = User.create(name: "Alexander Dunbar" ,
                  email: "some4@example.com", 
                  password: "123",
                  password_confirmation: "123") 


Inquiry.create(post_id: cc.id, 
               user_id: kim.id, 
               name: "Kimberly Tussaud",
               address: "1223 Sesame Dr., Lutz,  FL  34473",
               email: "some1@example.com",
               phone_number: "808-646-0435",
               skills: "Installation and equipment repair of electronics",
               education:  "HS Diploma",
               about: "Commodo ullamcorper a lacus vestibulum sed arcu. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Suspendisse sed nisi lacus sed viverra tellus. Elit eget gravida cum sociis natoque. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Aenean sed adipiscing diam donec adipiscing. Donec pretium vulputate sapien nec. Lacus laoreet non curabitur gravida arcu ac tortor. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Risus nullam eget felis eget nunc lobortis mattis. Sagittis id consectetur purus ut faucibus. ")

Inquiry.create(post_id: ucf.id, 
               user_id: alex.id, 
               name: "Alexander Dunbar",
               address: "1725 Orange Blvd., Winter Garden,  FL  32823",
               email: "some4@example.com",
               phone_number:  "618-345-0663",
               skills: "MS Office suite, Azure, onboarding computers, network administration",
               education:  "BS Computer Science",
               about: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam. Sit amet dictum sit amet justo donec enim. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Lectus arcu bibendum at varius vel pharetra vel turpis. Tellus pellentesque eu tincidunt tortor aliquam. Augue interdum velit euismod in pellentesque. Aenean pharetra magna ac placerat vestibulum lectus. Diam maecenas ultricies mi eget. Eu ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. In eu mi bibendum neque egestas congue quisque egestas diam.")

Inquiry.create(post_id: bhs.id, 
               user_id: elena.id, 
               name: "Elena Cielos",
               address: "9827 Sandboard Ave., Apopka,  FL  32734",
               email: "some3@example.com",
               phone_number: "543-445-1422",
               skills: "MS Office suite",
               education:  "HS Diploma",
               about: "Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Turpis nunc eget lorem dolor sed. Sagittis orci a scelerisque purus semper eget duis. Aliquet porttitor lacus luctus accumsan tortor posuere. Facilisis leo vel fringilla est ullamcorper eget. Vitae congue mauris rhoncus aenean vel elit scelerisque. A lacus vestibulum sed arcu non odio euismod lacinia. Eget aliquet nibh praesent tristique. Ac ut consequat semper viverra nam libero justo laoreet. Fringilla ut morbi tincidunt augue interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Augue eget arcu dictum varius duis at consectetur. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Ultricies mi eget mauris pharetra et ultrices neque ornare. Aliquet risus feugiat in ante metus dictum. Netus et malesuada fames ac turpis egestas sed tempus. Lacus viverra vitae congue eu consequat ac felis donec.")

Inquiry.create(post_id: fs.id, 
               user_id: john.id, 
               name: "John Hambrecht",
               address: "16601 International Dr., Gotha,  FL  32852",
               email: "some2@example.com",
               phone_number:  "748-746-0183",
               skills: "Microsoft Excel, Book-keeping",
               education:  "MS Accounting",
               about: "Ullamcorper sit amet risus nullam. Enim neque volutpat ac tincidunt vitae semper quis. Ultricies lacus sed turpis tincidunt id. Porttitor lacus luctus accumsan tortor posuere ac ut. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Facilisis magna etiam tempor orci. Consequat nisl vel pretium lectus quam. Praesent tristique magna sit amet purus gravida quis. Elit ullamcorper dignissim cras tincidunt lobortis. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sit amet est placerat in egestas erat imperdiet. Habitasse platea dictumst quisque sagittis purus sit amet. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Elementum tempus egestas sed sed. Accumsan tortor posuere ac ut consequat semper viverra. ")

                 
puts 'Done Seeding!'
