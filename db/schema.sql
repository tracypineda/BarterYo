DROP DATABASE IF EXISTS sequelize_barter_db;
CREATE DATABASE sequelize_barter_db;
USE sequelize_barter_db;

INSERT INTO Have (itemName, itemDescription, itemCategory)
VALUES ("shirt", "blue and red", "clothing"), ("computer", "very old", "electronics"),("iPhone", "5s", "electronics");

INSERT INTO Want (itemName, itemDescription, itemCategory)
VALUES ("shirt", "blue and red", "clothing"), ("computer", "very old", "electronics"),("iPhone", "5s", "electronics");

INSERT INTO User (email, password)
VALUES ("tracypineda@gmail.com", "testing");