//initiate all route handlers

module.exports = (app) => {
    //initial landing route
    require('./landing')(app);

    //admin routes
    require('./adminRoutes')(app);
};