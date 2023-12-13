# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:
Building the backend:

* Ruby version 3.0.0

* System dependencies

* Configuration

* Database: postgreSQL 14

# START UP INSTRUCTIONS AND COMMANDS
    * To install all necessary gems run command: `bundle install`
    * To run migrations use the command: `rails db:migrate`
    * To seed the database run the command: `rails db:seed`
    * To run backend run command:  `rails s or rails server`. The server will run port 3000 or localhost:3000
    * To run the frontend run command `npm start --prefix client`. command to run react app on localhost:4000

# USER FUNCTIONS 
* This app has a job seeker in mind as an end user.
    * Before signing in to an account users can see a summary of the job posts when they click on the "find a post" link. However, if the user wants to see the job details, they will be prompted to sign up or log in.
    * The user can sign up and login to their accounts. 
    * The user will see job posts  to their list and add, withdraw/delete and update the applications that they create.
    * The user can also filter the posts to search for particular job titles.
    * When the user first logs in or signs up they will see a link titled dashboard in the navigation bar. There they will be able to see the job posts as well as as their submitted aplications. 