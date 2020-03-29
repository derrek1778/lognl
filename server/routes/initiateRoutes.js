//initiate all route handlers

module.exports = (app) => {
    //initial landing route
    require('./landing')(app);

    //admin routes
    require('./adminRoutes')(app);

    //user_account routes
    require('./userValidateRoutes')(app);

};