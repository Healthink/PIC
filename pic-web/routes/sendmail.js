var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
var path = require('path');
var mysql = require('mysql');
var $conf = require('../conf/dbinfo');
var $ = require('stringformat');
var $util = require('../util/util');
var async = require('async');


// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));


var bodyParser = require('body-parser');

// ... 

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

var formidable = require("formidable");
/* GET home page. */
router.post('/', function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log('fields', fields); //表单传递的input数据  
        //console.log('files', files); //上传文件数据  
        delete fields['SubmitDUA/Save']
        htmlStr = ""
        for ( a in fields) {
            htmlStr = htmlStr + "<li>" + a + ":" + fields[a] + "</li>"
        }
        colname = []
        colvalue = []
        for ( b in fields){
            colname.push("`"+b+"`")
            colvalue.push("'"+fields[b]+"'")
        }
        insertSQL = 'insert into mimicuser ('+colname.join(',')+') values('+colvalue.join(',')+')';
        pool.getConnection(function (err, connection) {
            connection.query(insertSQL, function (err, result) {
                connection.release();
                var nodemailer = require("nodemailer");
                var transport = nodemailer.createTransport({
                    host: "smtp.server",
                    secureConnection: true,
                    port: 465,
                    auth: {
                        user: "smtp user",
                        pass: "smtp password"
                    }
                });


                var mailOptions = {
                    from: "PIC smtp email account",
                    //to: "hmli@zju.edu.cn",
                    to: "hmli@zju.edu.cn",
                    subject: "PIC request from "+fields['firstname'] ,
                    text: "PIC",
                    html: htmlStr,
                    attachments: [
                        {
                            filename: files['certificate'].name,
                            path: files['certificate'].path
                        }
                    ]

                }
                transport.sendMail(mailOptions, function (err, response) {
                    if (err) {
                        console.log(err)
                        res.render('senderr', {});
                    }
                    else{
                        console.log(response)
                        res.render('send', {});
                    }
                })
            })
        })

    });


});


module.exports = router;