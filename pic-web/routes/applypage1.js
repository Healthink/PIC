var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname,'../public/html/applypage.html'));
});


module.exports = router;