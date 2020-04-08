//initiate all route handlers
const accountRoute = require('./accountRoutes');
const mongoose = require('mongoose');
const Account = require('../models/Accounts');
const initiate = require('../models/InstatiateAdmin');
const {consoleMessage} = require('../util/logger/LoggerUtil');

module.exports = (app) => {

    //check if admin account exists, if not create admin
    consoleMessage('IniateRoutes', 'Create Admin User');
    //initiate.checkAndCreateAdmin(null);

    //initial landing route
    require('./landing')(app);

    //admin routes
    require('./adminRoutes')(app);

    //user_account routes
    //require('./accountRoutes')(app);

};