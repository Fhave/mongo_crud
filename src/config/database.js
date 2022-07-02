const mongoose = require('mongoose');
const {config} = require('dotenv');

config()

async function connect(uri) {
  try {
    mongoose.connect(uri || process.env.MONGO_DB_LOCAL);
    console.log('connected to database');
  } catch(err) {
    console.log(err.message);
    
  }
}

module.exports = connect;