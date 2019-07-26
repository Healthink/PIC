// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/dbinfo');
var $ = require('stringformat');
var $util = require('../util/util');
var sql = require('./sqlquery');
var async = require('async');


// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {

    search_graph_sign: function (req, res, next) {
        var term = req.body.term;
        var strSql = $(sql.query_sign, term);
        pool.getConnection(function (err, connection) {
            connection.query(strSql, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            })

        })


    },
    search_graph_med: function (req, res, next) {
        var term = req.body.term;
        var strSql = $(sql.query_med, term);
        pool.getConnection(function (err, connection) {
            connection.query(strSql, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            })

        })


    },

    search_graph_lab: function (req, res, next) {
        var term2 = req.body.term;
        var strSql2 = $(sql.query2, term2);
        pool.getConnection(function (err, connection) {
            connection.query(strSql2, function (err, result) {
                jsonWrite(res,result);
                connection.release();
            })

        })


    },

    search_graph_event: function (req, res, next) {
        var term3 = req.body.term;

        var strSql3 = {
            strSql30:  $(sql.query3, term3),
            strSql31:  $(sql.query6, term3)
        };
        //异步查询，一次查询多个sql语句
        async.map(strSql3,function(strSql3,callback) {
            pool.getConnection(function (err, connection) {
                connection.query(strSql3, function (err, result) {
                    callback(err, result);
                    connection.release();
                })

            })
        },function(err,result){
            if(err){
                console.log(err);
            }
            else{
                jsonWrite(res,result);

            }
        });
    },
    search_graph_surgeryvital: function (req, res, next) {
        var term40 = req.body.term;
        var term41 = req.body.term1;
        var strSql4 = $(sql.query4, term40,term41);
        pool.getConnection(function (err, connection) {
            connection.query(strSql4, function (err, result) {
                jsonWrite(res,result);
                connection.release();
            })

        })


    },

    search_graph_emrsymptom: function (req, res, next) {
        var term5 = req.body.term;
        var strSql5 = $(sql.query5, term5);
        pool.getConnection(function (err, connection) {
            connection.query(strSql5, function (err, result) {
                jsonWrite(res,result);
                connection.release();
            })

        })


    },

    search_id: function (req, res, next) {
        var term1 = req.body.term;
        var strSql1 = $(sql.query1, term1);
        pool.getConnection(function (err, connection) {
            connection.query(strSql1, function (err, result) {
                jsonWrite(res,result);
                connection.release();
            })

        })


    },
    getPatientsSummary:function(req,res,next){
        pool.getConnection(function (err, connection) {
            connection.query(sql.queryPatients, function (err, result) {
                jsonWrite(res,result);
                connection.release();
            })
        })
    },
    getICULOSSummary:function(req,res,next){
        pool.getConnection(function (err, connection) {
            connection.query(sql.queryICULOS, function (err, result) {
                jsonWrite(res,result);
                connection.release();
            })
        })
    },
    getPatientAge:function(req,res,next){
        pool.getConnection(function (err, connection) {
            connection.query(sql.queryPatientAge, function (err, result) {
                jsonWrite(res,result);
                connection.release();
            })
        })
    },
    getTopDisease:function(req,res,next){
        pool.getConnection(function (err, connection) {
            connection.query(sql.queryTopDisease, function (err, result) {
                jsonWrite(res,result);
                connection.release();
            })
        })
    },
    getAdmissionMonth:function(req,res,next){
        pool.getConnection(function (err, connection) {
            connection.query(sql.queryAdmissionMonth, function (err, result) {
                jsonWrite(res,result);
                connection.release();
            })
        })
    },
    // getAdmissionReason:function(req,res,next){
    //     pool.getConnection(function (err, connection) {
    //         connection.query(sql.queryAdmissionReason, function (err, result) {
    //             jsonWrite(res,result);
    //             connection.release();
    //         })
    //     })
    // },
    getAdmissionLocation:function(req,res,next){
        pool.getConnection(function (err, connection) {
            connection.query(sql.queryAdmissionLocation, function (err, result) {
                jsonWrite(res,result);
                connection.release();
            })
        })
    },
    getFilterResult: function(req,res,next) {
        var gender = req.query.gender;
        var death = req.query.death;
        var los = req.query.los;
        var department = req.query.department;
        // console.log(req.query);
        var res_gender="";
        var res_death="";
        var res_los="";
        var res_department="";


        var strSql0='select patients_new.SUBJECT_ID,GENDER,DOB,DOD,EXPIRE_FLAG,admissions.HADM_ID,ADMITTIME,DISCHTIME,ADMISSION_LOCATION,DISCHARGE_LOCATION,ICD10_CODE as DIAGNOSIS,icustay.ICUSTAY_ID,FIRST_CAREUNIT,LAST_CAREUNIT,icustay.INTIME,OUTTIME,LOS from patients_new,admissions,icustay where ';




        if (gender[0] == '0') {
            var strSql1 = ''
        }
        else if (gender[0] == '1') {
            if (gender == '1.1') {
                res_gender = 'M';
            } else if (gender == '1.2') {
                res_gender = 'F';
            }
            var strSql1 = 'patients_new.GENDER=\''+res_gender+'\' and ';
        }

        if (death[0] == '0') {
            var strSql2 = ''
        }
        else if (death[0] == '1') {
            if (death == '1.1') {
                res_death = '1';
            } else if (death == '1.2') {
                res_death = '0';
            }
            var strSql2 = 'patients_new.EXPIRE_FLAG=\''+res_death+'\' and ';
        }

        if (los[0] == '0') {
            var strSql3 = ''
        }
        else if (los[0] == '1') {
            if (los == '1.1') {
                var strSql3 = 'icustay.LOS<5 and ';
            }
            else if (los == '1.2') {
                var strSql3 = 'icustay.LOS>=5 and ';
            }
            else if (los == '1.3') {
                var strSql3 = 'icustay.LOS>=10 and ';
            }
        }

        if (department[0] == '0') {
            var strSql4 = ''
        }
        else if (department[0] == '1') {
            if (department == '1.1') {
                res_department='CICU';
            }
            else if (department == '1.2') {
                res_department='General ICU';
            }
            else if (department == '1.3') {
                res_department='NICU'
            }
            else if (department == '1.4') {
                res_department='PICU'
            }
            else if (department == '1.5') {
                res_department='SICU'
            }
            var strSql4 = 'admissions.ADMISSION_LOCATION=\''+res_department+'\' and '
        }
        else if (department[0] == '2') {
            if (department == '2.1') {
                res_department='Burn/Neurosurgery department';
            }
            else if (department == '2.2') {
                res_department='Cardiac surgery department';
            }
            else if (department == '2.3') {
                res_department='Cardiovascular department'
            }
            else if (department == '2.4') {
                res_department='Endocrinology department'
            }
            else if (department == '2.5') {
                res_department='Gastroenterology department'
            }
            else if (department == '2.6') {
                res_department='General surgery department';
            }
            else if (department == '2.7') {
                res_department='General surgery/Endoscopy department'
            }
            else if (department == '2.8') {
                res_department='General surgery/Neonatology surgery department'
            }
            else if (department == '2.9') {
                res_department='Hematology department(1) or admissions.ADMISSION_LOCATION =Hematology department(2) or admissions.ADMISSION_LOCATION=Hematology department(3)'
            }
            else if (department == '2.10') {
                res_department='Infectious diseases department';
            }
            else if (department == '2.11') {
                res_department='Neonatology department(1) or admissions.ADMISSION_LOCATION=Neonatology department(2)'
            }
            else if (department == '2.12') {
                res_department='Nephrology department(1) or admissions.ADMISSION_LOCATION=Nephrology department(2)'
            }
            else if (department == '2.13') {
                res_department='Neurology department'
            }
            else if (department == '2.14') {
                res_department='Ophthalmology department/ENT';
            }
            else if (department == '2.15') {
                res_department='Orthopedics/Neurology department'
            }
            else if (department == '2.16') {
                res_department='Orthopedics/Traumatology department'
            }
            else if (department == '2.17') {
                res_department='Pediatric internal medicine(1)'
            }
            else if (department == '2.18') {
                res_department='Respiratory medicine department(1) or admissions.ADMISSION_LOCATION=Respiratory medicine department(2)';
            }
            else if (department == '2.19') {
                res_department='Rheumatology department'
            }
            else if (department == '2.20') {
                res_department='Thoracic surgery/Oncology department'
            }
            else if (department == '2.21') {
                res_department='Urinary surgery department(1) or admissions.ADMISSION_LOCATION=Urinary surgery department(2)'
            }
            var strSql4 = '(admissions.ADMISSION_LOCATION=\''+res_department+'\') and '
        }
        else if (department[0] == '3') {
            if (department == '3.1') {
                res_department='Nine ward';
            }
            else if (department == '3.2') {
                res_department='Fourteen ward';
            }
            var strSql4 = 'admissions.ADMISSION_LOCATION=\''+res_department+'\' and '
        }
        else if (department[0] == '4') {
            res_department=NULL;
            var strSql4 = 'admissions.ADMISSION_LOCATION='+res_department+' and '
    }



        var strSql5 ='patients_new.SUBJECT_ID=admissions.SUBJECT_ID and patients_new.SUBJECT_ID=icustay.SUBJECT_ID ORDER BY patients_new.SUBJECT_ID DESC';
        var strSql=strSql0+strSql1+strSql2+strSql3+strSql4+strSql5;

        // console.log(strSql);


        pool.getConnection(function (err, connection) {
            if(err) {
                console.log("Filter Error！");
            }else {
                connection.query(strSql, function (err, result) {
                    if(err) {
                        throw err;
                    }else {
                        res.render("filter_result", {FilterResults: result});
                        // console.log(result);
                        // res.render("filter_result", {searchResults: result, databaseNo: database[0][0]});
                    }
                    connection.release();
                })
            }

        })
    },


        };


