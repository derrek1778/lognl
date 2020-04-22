const express = require('express');
const router = express.Router();
let Account = require('../models/Accounts');
const {consoleMessage, consoleMessageWithObject} = require('../util/logger/LoggerUtil');
const accountController = require('../controllers/account/AccountContoller');



    router.route('/').get((req,res) =>{
        console.log('AccountRoutes :: find all accounts');
        Account.find()
                .then(accounts => res.json(accounts))
                .catch(err => res.status(400).json('Error: '+ err));
    });


    /**
     * @route addAccount
     */
    router.route('/create_new_account').post(async (req,res) => {
        
        const dbTesting = false;

        var name;
        var id;
        var description;
        var key;

        try{
            name = req.body.accountName;
            id = Number(req.body.accountId);
            description= req.body.accountDesc;
            key = req.body.accountKey;
            isAdmin = Boolean(req.body.isAdmin);
            isActive = Boolean(req.body.isActive);
        }catch(err){
            return res.status(400).json('Unable to complete this request');
        }
        
        var existingAccount;
        if(!dbTesting){
            try{
                existingAccount = await Account.findOne({accountId: id});
            }catch(err){
                consoleMessage('AccountRoute', err);
            }
        }


        if(existingAccount){
            console.log('AccountRoute :: Message -> Account found ' + existingAccount.accountId);
            //console.log('AccountRoute :: Message -> Account Not found');
            return res.json(existingAccount);
        
        }else{

            consoleMessage('AccountRoute', 'Account Not found Create new');

            var newAccount;
            if(!dbTesting){
                try{
                    newAccount = new Account({
                    accountId: id, 
                    accountName: name,
                    accountDesc: description,
                    accountKey: key,
                    isAdmin: isAdmin,
                    isActive: isActive
                    });
                
                const account =  newAccount.save()
                //.then(res.status(200).json(account))
                }catch(err){
                    consoleMessage('AccountRoute', err);
                } 
                consoleMessageWithObject('AccountRoute', 'Account created', newAccount);
                return  res.json(newAccount);
            
            }else{
                res.status(200).json('Tested');
            }

             //done(null, newAccount);
         }
            
    });

    /**
     * @route findOne
     * @desc find one account using the account id 
     */
    router.route('/check_user_account/').get( async (req, res) => {
        console.log('Called Check user account ');

        
        var  id;
        try{
            console.log('account fetch req ',req.query);
            id = req.query.accountId;
        }catch(err){
            return res.status(400).json('Unable to read account Id');
        }
       console.log('message id ', id);
        var fetchAccount;
        try{ 
            fetchAccount = await Account.findOne({accountId: id});
        }catch( err){ 
            consoleMessage('AccountRoute', err);
        }
        console.log('Account model :: account -> ' + fetchAccount);
        if(fetchAccount){
            consoleMessage('AccountRoute','Account exists');
            return res.json(fetchAccount);
        }else{ 
            consoleMessage('AccountRoute', 'Account not found');
            return res.status(202).json(id+' Not a valid account');
        }
    });

   module.exports = router;
