var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {});
});

router.get('/patients',function(req,res,next){
    userDao.getPatientsSummary(req,res,next);
});

router.get('/ICULOS',function(req,res,next){
    userDao.getICULOSSummary(req,res,next);
});

router.get('/patientage',function(req,res,next){
    userDao.getPatientAge(req,res,next);
});

router.get('/topdiseases',function(req,res,next){
    userDao.getTopDisease(req,res,next);
});

router.get('/admissionmonth',function(req,res,next){
    userDao.getAdmissionMonth(req,res,next);
});

// router.get('/admissionreason',function(req,res,next){
//     userDao.getAdmissionReason(req,res,next);
// });
router.get('/admissionlocation',function(req,res,next){
    userDao.getAdmissionLocation(req,res,next);
});

module.exports = router;
