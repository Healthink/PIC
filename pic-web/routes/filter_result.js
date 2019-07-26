var express = require('express');
var filterresultRouter = express.Router();
var userDao = require("../dao/userDao");

filterresultRouter.get("/",function(req,res,next) {
    userDao.getFilterResult(req,res,next);
});

module.exports = filterresultRouter;