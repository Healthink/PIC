var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { title: 'pMIMIC' });
});


module.exports = router;