//import express module
const express = require('express');

//create new instance of Express
const app = express();

//default route handler
app.get('/', (req, resp) => { 
    resp.send({ Hi: 'Hello World' });
});

//Open port
app.listen(4000);
