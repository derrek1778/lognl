const express = require('express');
const router = express.Router();
let Account = require('../models/Accounts');
const {consoleMessage, consoleMessageWithObject} = require('../util/logger/LoggerUtil');

module.exports = router;