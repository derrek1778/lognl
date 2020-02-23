const mongoose = require('mongoose');
const keys = require('./keys');


mongoose.connect((keys.mongoURI), {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { // log if connect is successful
        console.log('Successfully connected to mongodb');
    }).catch((err) => { //log any exceptions
        console.log('Could not connect to mongoDb', err);
    });