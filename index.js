const express = require('express');

const path = require('path');
const fs = require('fs');
const port = 8000;
const db = require('./config/mongoose');
// const Details = require('./models/details');

// askhf
const app = express();
//***************Addittionl************************//

app.set('view engine', 'ejs');

// __dirname is the path to current folder
// all the views file (to be viewed on client side) will be taken from here
app.set('views', path.join(__dirname,'views'));

// middle ware 1 
app.use(express.urlencoded({ extended: true, useNewUrlParser: true}));
app.use(express.static('assets'));

//**************************************************//

// use express router
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return ;
    }

    console.log(`Server is running on port no ${port}`);
})