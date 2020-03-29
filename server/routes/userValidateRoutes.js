module.exports= (app)=>{
    // Routes for user validation
    app.get('/api/check_user_account', (req,resp) => {
        console.log('User validation check');
        resp.send({value:'useraccounts'});
    });
}