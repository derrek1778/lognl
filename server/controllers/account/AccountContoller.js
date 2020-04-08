/**
 * @author Vasudev
 * 
 */
const mongoose = require('mongoose');
const Account = mongoose.model('accounts');

    /**
     * @desc create an account if the request is from 
     *       an admin account
     */
    createAccount = (req, res) => {
        
        const accountInfo = req.body;
        
        if(!accountInfo){
            return res.status(400).json({
                success: false, 
                error: 'Please provide account informaion'
            })
        }// request body check end

        // if valid account informatiom was send persist
        const accountData = new Account(accountInfo);

        if(!accountData){
            return res.status(400).json({success: false, error: err});
        }

        accountData
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true, 
                    id: accountData._id,
                    message: 'Account Created'
                })
            })

    }// end - create account method

    getAccountById = async (req, res) => {
        console.log('controller called');
        console.log('account info', req.params.accountId);
        let acc = null;
        try{
            acc =  await Account.findOne({accountId: req.params.accountId})
            //acc = await new Account({accountId: req.params.accountId}).save();
        }catch(err){
            console.error('Exception caught :: ', err);
        }
            console.log('what was returned', accounts);
        }
        
module.exports = {
    createAccount, 
    getAccountById
}