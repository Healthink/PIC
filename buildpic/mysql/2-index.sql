-- ----------------------------------------------------------------
--
-- This is a script to add the PIC indexes for MySQL.
--
-- These are indexes that were not automagically created as UNIQUE KEY
-- constraints in the define-load step as determined by csv2mysql.
-- They include non-unique keys and multi-column keys that are
-- semantically meaningful.
--
-- These index definitions should be taken as mere suggestions. Which
-- indexes make sense depend on the applications.
-- 

USE pic;

-- -----------
-- ADMISSIONS
-- -----------

alter table ADMISSIONS
      add index ADMISSIONS_IDX01 (SUBJECT_ID,HADM_ID),
      add index ADMISSIONS_IDX02 (ADMITTIME, DISCHTIME, DEATHTIME);

-- -------------
-- CHARTEVENTS
-- -------------
alter table CHARTEVENTS 
      add index CHARTEVENTS_idx01 (SUBJECT_ID, HADM_ID, ICUSTAY_ID),
      add index CHARTEVENTS_idx02 (ITEMID),
      add index CHARTEVENTS_idx03 (CHARTTIME, STORETIME);


-- ------------------
-- D_ICD_DIAGNOSES
-- ------------------

alter table D_ICD_DIAGNOSES
      add index D_ICD_DIAG_idx02 (ICD10_CODE);


-- ---------
-- D_ITEMS
-- ---------

alter table D_ITEMS
      add index D_ITEMS_idx02 (LABEL(255)),
      add index D_ITEMS_idx03 (CATEGORY);

-- -------------
-- D_LABITEMS
-- -------------

alter table D_LABITEMS
      add index D_LABITEMS_idx02 (LABEL, FLUID, CATEGORY),
      add index D_LABITEMS_idx03 (LOINC_CODE);

-- ----------------
-- DIAGNOSES_ICD
-- ----------------

alter table DIAGNOSES_ICD 
      add index DIAGNOSES_ICD_idx01 (SUBJECT_ID, HADM_ID),
      add index DIAGNOSES_ICD_idx02 (ICD10_CODE_CN, SEQ_NUM);

-- ----------------
-- EMR_SYMPTOMS
-- ----------------

alter table EMR_SYMPTOMS 
      add index EMR_SYMPTOMS_idx01 (SUBJECT_ID, HADM_ID),
      add index EMR_SYMPTOMS_idx02 (RECORDTIME);


-- ----------------
-- ICUSTAYS
-- ----------------

alter table ICUSTAYS
      add index ICUSTAYS_idx01 (SUBJECT_ID, HADM_ID),
      add index ICUSTAYS_idx02 (ICUSTAY_ID),
      add index ICUSTAYS_idx03 (LOS),
      add index ICUSTAYS_idx04 (FIRST_CAREUNIT),
      add index ICUSTAYS_idx05 (LAST_CAREUNIT);


-- ------------
-- LABEVENTS
-- ------------

alter table LABEVENTS 
      add index LABEVENTS_idx01 (SUBJECT_ID, HADM_ID),
      add index LABEVENTS_idx02 (ITEMID),
      add index LABEVENTS_idx03 (CHARTTIME),
      add index LABEVENTS_idx04 (VALUE(255), VALUENUM);

-- --------------------
-- MICROBIOLOGYEVENTS
-- --------------------

alter table MICROBIOLOGYEVENTS 
      add index MICROBIOLOGYEVENTS_idx01 (SUBJECT_ID, HADM_ID),
      add index MICROBIOLOGYEVENTS_idx02 (CHARTTIME),
      add index MICROBIOLOGYEVENTS_idx03 (ORG_ITEMID, AB_ITEMID);

-- -------------
-- OR_EXAM_REPORTS
-- -------------

alter table OR_EXAM_REPORTS
      add index OR_EXAM_REPORTS_idx01 (SUBJECT_ID, HADM_ID),
      add index OR_EXAM_REPORTS_idx02 (EXAMTIME);
-- --------------
-- OUTPUTEVENTS
-- --------------

alter table OUTPUTEVENTS
      add index OUTPUTEVENTS_idx01 (SUBJECT_ID, HADM_ID),
      add index OUTPUTEVENTS_idx02 (ICUSTAY_ID),
      add index OUTPUTEVENTS_idx03 (CHARTTIME, STORETIME),
      add index OUTPUTEVENTS_idx04 (ITEMID),
      add index OUTPUTEVENTS_idx05 (VALUE);

-- --------------
-- INPUTEVENTS
-- --------------

alter table INPUTEVENTS
      add index OUTPUTEVENTS_idx01 (SUBJECT_ID, HADM_ID),
      add index OUTPUTEVENTS_idx02 (ICUSTAY_ID),
      add index OUTPUTEVENTS_idx03 (CHARTTIME, STORETIME),
      add index OUTPUTEVENTS_idx04 (AMOUNT);
      
-- -----------
-- PATIENTS
-- -----------

alter table PATIENTS
      add index PATIENTS_idx01 (EXPIRE_FLAG);

-- ----------------
-- PRESCRIPTIONS
-- ----------------

alter table PRESCRIPTIONS
      add index PRESCRIPTIONS_idx01 (SUBJECT_ID, HADM_ID),
      add index PRESCRIPTIONS_idx02 (ICUSTAY_ID),
      add index PRESCRIPTIONS_idx04 (DRUG_NAME),
      add index PRESCRIPTIONS_idx05 (STARTDATE, ENDDATE);

-- -----------
-- SURGERY_VITAL_SIGNS
-- -----------

alter table SURGERY_VITAL_SIGNS
      add index SURGERY_VITAL_SIGNS_idx01 (SUBJECT_ID, HADM_ID),
      add index SURGERY_VITAL_SIGNS_idx02 (ITEM_NO),
      add index SURGERY_VITAL_SIGNS_idx03 (ITEMID),
      add index SURGERY_VITAL_SIGNS_idx04 (VALUE);
