//handler for landing page

module.exports = (app) => {
   
    app.get('/', (req, resp) => { 
        resp.send({ Hi: 'Hello World' });
    });

    
};