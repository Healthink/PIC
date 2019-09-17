// dao/sqlquery.js
// SQL查询语句
var user = {
    //query:'select PATIENTS.SUBJECT_ID,GENDER,DOB,CHARTEVENTS.ITEMID,CHARTTIME,VALUENUM,VALUEUOM from PATIENTS,CHARTEVENTS where PATIENTS.SUBJECT_ID="{0}" and CHARTEVENTS.SUBJECT_ID=PATIENTS.SUBJECT_ID'
    //signs
    query_sign:'select patients_new.SUBJECT_ID,patients_new.HADM_ID,patients_new.ICUSTAY_ID,chartevents_new.CHARTTIME,Temperature,Pulse,`HeartRate`,`RespiratoryRate`,`OxygenSaturation`,Excrement,`UrineOutput`,`Input`,`Output`,`BloodGlucose`,`PainScore`,Height,Weight,`DiastolicPressure`,`SystolicPressure`,`AbdominalGirth`,`BoxTemperature`,Calories,`HeadCircumference` from patients_new,chartevents_new where patients_new.ICUSTAY_ID="{0}" and chartevents_new.ICUSTAY_ID="{0}" order by chartevents_new.CHARTTIME',
    //medication
    query_med:'select patients_new.SUBJECT_ID,patients_new.HADM_ID,patients_new.ICUSTAY_ID,prescriptions_new.STARTDATE,ENDDATE,DRUG_NAME_EN,PROD_STRENGTH,DOSE_VAL_RX,DOSE_UNIT_RX from patients_new,prescriptions_new where patients_new.ICUSTAY_ID="{0}" and prescriptions_new.ICUSTAY_ID="{0}" order by prescriptions_new.STARTDATE,prescriptions_new.ENDDATE',
    //basic information
    query1:'select SUBJECT_ID,HADM_ID,ICUSTAY_ID,GENDER,EXPIRE_FLAG,DOB,DOD,INTIME from patients_new where SUBJECT_ID="{0}"',
    //lab test
    query2:'select SUBJECT_ID,HADM_ID,ITEMID,CHARTTIME,`VALUE`,VALUENUM,VALUEUOM,FLAG,LABEL from labevents_new where HADM_ID="{0}" and VALUENUM!="" and LABEL!="" order by LABEL,CHARTTIME',
    //admission,discharge,transfer
    query3:'select icustay.SUBJECT_ID,icustay.HADM_ID,ICUSTAY_ID,LAST_CAREUNIT,LAST_WARDID,INTIME,OUTTIME,ADMITTIME,DISCHTIME,ADMISSION_LOCATION,DISCHARGE_LOCATION from icustay,admissions where icustay.SUBJECT_ID="{0}" and admissions.SUBJECT_ID="{0}" and admissions.HADM_ID=icustay.HADM_ID  order by ADMITTIME,INTIME',
    //surgery vitals
    query4:'select HADM_ID,SUBJECT_ID,MONITOR_TIME,HeartRate,Pulse,SystolicPressure,DiastolicPressure,CentralVenousPressure,RespiratoryRate,O2Saturation from surgery_vital_new where HADM_ID="{0}" and OPER_ID="{1}" order by MONITOR_TIME',
    //symptoms
    query5:'select distinct HADM_ID,EMR_ID,RECORD_TIME,SYMPTOM_NAME_EN,SYMPTOM_ATTRIBUTE from emr_symptom_new where HADM_ID="{0}" order by RECORD_TIME',
    //surgery monitor time
    query6:'select SUBJECT_ID,HADM_ID,OPER_ID,MONITOR_TIME from surgery_vital_new where SUBJECT_ID="{0}"  order by MONITOR_TIME',
    queryICULOS:'select floor(LOS),count(*) as value from icustay where LOS >=0 and LOS <30 group by floor(LOS)',
    queryPatients:'SELECT GENDER,count(*) as value FROM patients_new where GENDER =\'F\' or GENDER =\'M\' group by GENDER',
    queryPatientAge:'SELECT TIMESTAMPDIFF(YEAR,p.DOB,s.INTIME) as age,count(*) as value FROM icustay as s, patients_new as p where p.SUBJECT_ID = s.SUBJECT_ID  group by TIMESTAMPDIFF(YEAR,p.DOB,s.INTIME)',
    queryTopDisease:'SELECT dd.TITLE_EN,count(*) as value FROM admissions d,D_ICD_DIAGNOSES_CN dd where dd.ICD10 = d.ICD10_CODE group by dd.TITLE_EN order by count(*) desc limit 10',

    // queryDiagTerms:"SELECT ICD9_CODE, SHORT_TITLE  FROM pMIMIC.D_ICD_DIAGNOSES where short_title like '{0}%' limit  10",
    // queryProcedureTerms:"SELECT ICD9_CODE, SHORT_TITLE FROM pMIMIC.D_ICD_PROCEDURES where SHORT_TITLE like '{0}%' limit 10",
    // queryICDTerms:"(SELECT ICD9_CODE, SHORT_TITLE  FROM pMIMIC.D_ICD_DIAGNOSES where short_title like '{0}%' limit  10) union (SELECT ICD9_CODE, SHORT_TITLE FROM pMIMIC.D_ICD_PROCEDURES where SHORT_TITLE like '{0}%' limit 10)",
    queryAdmissionMonth:"SELECT MONTH(ADMITTIME) month ,COUNT(*) value FROM admissions where ! ISNULL(MONTH(ADMITTIME)) group by month",
    // queryAdmissionReason:"SELECT ADMISSION_TYPE reason,COUNT(*) value FROM pMIMIC.ADMISSIONS group by ADMISSION_TYPE;",
    queryAdmissionLocation:"SELECT ADMISSION_LOCATION location,COUNT(*) value FROM admissions group by ADMISSION_LOCATION",

};

module.exports = user;
