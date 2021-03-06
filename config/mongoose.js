//require the library
// console.log("IN")
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/Details',{ useNewUrlParser: true, useUnifiedTopology: true });

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});
// console.log('OUT');