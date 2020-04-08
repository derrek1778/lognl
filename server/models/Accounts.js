const mongoose = require('mongoose');
const {Schema} = mongoose;

const accountSchema = new Schema({
    accountId: {type: Number},
    accountName: String,
    accountDesc: String,
    accountKey: {type: Number},
    isAdmin: Boolean
},{
    timestamps: true,
});

const Account = mongoose.model('accounts',accountSchema);
module.exports = Account;