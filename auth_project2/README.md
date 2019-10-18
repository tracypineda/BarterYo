# Sequelize Passport Demo
This repo utilizes the same structure as we use in The DU Coding Boot Camp, and demonstrates basic MVC architecture. It uses the PassportJS localStrategy for user authentication.

This authentication would be suitable for Project #2 or Project #3. Customizing the code within assumes comfort with Node/Express/Handlebars/Sequelize. Consider augmenting the functionality to work with a username rather than an email address, or to require multiple password character types/greater complexity.

The existing routes/controllers structure can be preserved and application-specific routes can be added. See the comments in the '/routes/' folder for further guidance on this. 

## Getting Started

### Installation/Setup

* Be sure to run an `npm install` to install dependencies.
* On your local computer, create a database for this app.
* Create `.env` at the same level as `server.js` and populate it with values for the following key/value pairs:
    ```
    SESSION_SECRET=yoursecrethere  
    SALT_NUM=8

    DB_USERNAME=root
    DB_PASSWORD=root
    DB_DATABASE=yourdatabasehere
    DB_HOST=localhost
    DB_PORT=8889
    ```
* Note: you will need to populate the `.env` referenced above with the values you use with MySQL. Use the values you used in class for DB_PASSWORD, DB_PORT, etc.
* Run `node server.js` to start the app.

### Deployment

* `/config/config.js` is set up for Heroku/JawsDB; change if needed.
* You will need to add environmental variables (called config vars on Heroku) to supply the values you access locally from your `.env` file.