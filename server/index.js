//import express module
const express = require('express');
//import mongoose
const mongoose = require('mongoose');
//add keys config
const keys = require('./config/keys');
//create new instance of Express
const app = express();

//open connection to mongo
//mongoose.connect(keys.mongoURI);
require('./config/dbConfig');
//initiate mongoose models
require('./models/Accounts');

//initiate route handlers
//require('./routes/initiateRoutes')(app);

//define route
const accountRoute = require('./routes/accountRoutes');
const adminRoute = require('./routes/adminRoutes');

//add routes
app.use('/api',accountRoute);
app.use('/adm', adminRoute);


const PORT = process.env.PORT || 4000;
//Open port
app.listen(PORT);
