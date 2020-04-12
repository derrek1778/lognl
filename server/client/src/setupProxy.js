const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy(['/api', '/adm'], {target:'http://localhost:4000'}));
}