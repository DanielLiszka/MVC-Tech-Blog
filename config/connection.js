// Import the Sequelize constructor
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to the database
let sequelize;

if (process.env.JAWSDB_URL) {
  //Use jawsdb for heroku deployment
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  //Else use local .env settings
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;