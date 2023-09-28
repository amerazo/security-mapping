// DOTENV AND MONGOOSE
const mongoose = require('mongoose');
require('dotenv').config()

// MONGODB CONNECTION
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

// DB CONNECTION
db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

// EXPORT THE MODELS
module.exports = {
    Threat: require('./Threat'),
    Control: require('./Control'), 
    threatSeedData: require('./seed'),
    controlsSeedData: require('./controls-seed'),
    Mapping: require('./Mapping')
  };