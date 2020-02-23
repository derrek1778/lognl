//import express module
const express = require('express');
//import mongoose
const mongoose = require('mongoose');
//add keys config
const keys = require('./config/keys');
//create new instance of Express
const app = express();

//open connection to mongo
mongoose.connect(keys.mongoURI);

//default route handler
app.get('/', (req, resp) => { 
    resp.send({ Hi: 'Hello World' });
});

const PORT = process.env.PORT || 4000;
//Open port
app.listen(PORT);
