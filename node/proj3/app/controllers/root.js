var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.use('/', router);
}

router.get('/', function(request, response, next) {
    response.send('<a href="/blog">Link to blog.</a>');
});