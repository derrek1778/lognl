const mongoose = require('mongoose');
const Account = require('./Accounts');
const {consoleMessage} = require('../util/logger/LoggerUtil');

const checkAndCreateAdmin = (none) => {
    var adminExist;

    consoleMessage('InstantiateModel', 'Called');
    
}

module.exports = {
    checkAndCreateAdmin
}