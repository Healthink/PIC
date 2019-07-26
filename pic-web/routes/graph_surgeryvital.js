var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('graph_surgeryvital', { term: req.query.q });
});

router.post('/list', function(req, res, next) {
    userDao.search_graph_surgeryvital(req,res,next);
});

module.exports = router;
