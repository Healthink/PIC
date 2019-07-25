-- ----------------------------------------------------------------
--
-- This is a script to add the PIC constraints for MySQL.
-- 
-- ----------------------------------------------------------------

-- The below command defines the schema where the data should reside
use pic;

-- ---------------
-- CHARTEVENTS--
-- ---------------

-- subject_id
ALTER TABLE CHARTEVENTS DROP FOREIGN KEY chartevents_fk_subject_id;
ALTER TABLE CHARTEVENTS
ADD CONSTRAINT chartevents_fk_subject_id
  FOREIGN KEY (SUBJECT_ID)
  REFERENCES PATIENTS(SUBJECT_ID);

-- hadm_id
ALTER TABLE CHARTEVENTS DROP FOREIGN KEY chartevents_fk_hadm_id;
ALTER TABLE CHARTEVENTS
ADD CONSTRAINT chartevents_fk_hadm_id
  FOREIGN KEY (HADM_ID)
  REFERENCES ADMISSIONS(HADM_ID);

-- icustay_id
ALTER TABLE CHARTEVENTS DROP FOREIGN KEY chartevents_fk_icustay_id;
ALTER TABLE CHARTEVENTS
ADD CONSTRAINT chartevents_fk_icustay_id
  FOREIGN KEY (ICUSTAY_ID)
  REFERENCES ICUSTAYS(ICUSTAY_ID);

-- itemid
ALTER TABLE CHARTEVENTS DROP FOREIGN KEY chartevents_fk_itemid;
ALTER TABLE CHARTEVENTS
ADD CONSTRAINT chartevents_fk_itemid
  FOREIGN KEY (ITEMID)
  REFERENCES D_ITEMS(ITEMID);
-- ---------------
-- DIAGNOSES_ICD--
-- ---------------

-- subject_id
ALTER TABLE DIAGNOSES_ICD DROP FOREIGN KEY diagnoses_icd_fk_subject_id;
ALTER TABLE DIAGNOSES_ICD
ADD CONSTRAINT diagnoses_icd_fk_subject_id
  FOREIGN KEY (SUBJECT_ID)
  REFERENCES PATIENTS(SUBJECT_ID);

-- hadm_id
ALTER TABLE DIAGNOSES_ICD DROP FOREIGN KEY diagnoses_icd_fk_hadm_id;
ALTER TABLE DIAGNOSES_ICD
ADD CONSTRAINT diagnoses_icd_fk_hadm_id
  FOREIGN KEY (HADM_ID)
  REFERENCES ADMISSIONS(HADM_ID);

-- icd10_code_cn
ALTER TABLE DIAGNOSES_ICD DROP FOREIGN KEY diagnoses_icd_fk_icd10_code_cn;
ALTER TABLE DIAGNOSES_ICD
ADD CONSTRAINT diagnoses_icd_fk_icd10_code_cn
  FOREIGN KEY (ICD10_CODE_CN)
  REFERENCES D_ICD_DIAGNOSES(ICD10_CODE_CN);


-- ---------------
-- EMR_SYMPTOMS--
-- ---------------

-- hadm_id
ALTER TABLE EMR_SYMPTOMS DROP FOREIGN KEY emr_symptoms_fk_hadm_id;
ALTER TABLE EMR_SYMPTOMS
ADD CONSTRAINT emr_symptoms_fk_hadm_id
  FOREIGN KEY (HADM_ID)
  REFERENCES ADMISSIONS(HADM_ID);


-- ---------------
-- ICUSTAYS--
-- ---------------

-- hadm_id
ALTER TABLE ICUSTAYS DROP FOREIGN KEY icustays_fk_hadm_id;
ALTER TABLE ICUSTAYS
ADD CONSTRAINT icustays_fk_hadm_id
  FOREIGN KEY (HADM_ID)
  REFERENCES ADMISSIONS(HADM_ID);


-- -----------
-- LABEVENTS--
-- -----------

-- subject_id
ALTER TABLE LABEVENTS DROP FOREIGN KEY labevents_fk_subject_id;
ALTER TABLE LABEVENTS
ADD CONSTRAINT labevents_fk_subject_id
  FOREIGN KEY (SUBJECT_ID)
  REFERENCES PATIENTS(SUBJECT_ID);

-- hadm_id
ALTER TABLE LABEVENTS DROP FOREIGN KEY labevents_fk_hadm_id;
ALTER TABLE LABEVENTS
ADD CONSTRAINT labevents_fk_hadm_id
  FOREIGN KEY (HADM_ID)
  REFERENCES ADMISSIONS(HADM_ID);

-- item_id
ALTER TABLE LABEVENTS DROP FOREIGN KEY labevents_fk_itemid;
ALTER TABLE LABEVENTS
ADD CONSTRAINT labevents_fk_itemid
  FOREIGN KEY (ITEMID)
  REFERENCES D_LABITEMS(ITEMID);

-- --------------------
-- MICROBIOLOGYEVENTS--
-- --------------------

-- subject_id
ALTER TABLE MICROBIOLOGYEVENTS DROP FOREIGN KEY microbiologyevents_fk_subject_id;
ALTER TABLE MICROBIOLOGYEVENTS
ADD CONSTRAINT microbiologyevents_fk_subject_id
  FOREIGN KEY (SUBJECT_ID)
  REFERENCES PATIENTS(SUBJECT_ID);

-- hadm_id
ALTER TABLE MICROBIOLOGYEVENTS DROP FOREIGN KEY microbiologyevents_fk_hadm_id;
ALTER TABLE MICROBIOLOGYEVENTS
ADD CONSTRAINT microbiologyevents_fk_hadm_id
  FOREIGN KEY (HADM_ID)
  REFERENCES ADMISSIONS(HADM_ID);

-- ab_itemid
ALTER TABLE MICROBIOLOGYEVENTS DROP FOREIGN KEY microbiologyevents_fk_ab_itemid;
ALTER TABLE MICROBIOLOGYEVENTS
ADD CONSTRAINT microbiologyevents_fk_ab_itemid
  FOREIGN KEY (AB_ITEMID)
  REFERENCES D_ITEMS(ITEMID);

-- org_itemid
ALTER TABLE MICROBIOLOGYEVENTS DROP FOREIGN KEY microbiologyevents_fk_org_itemid;
ALTER TABLE MICROBIOLOGYEVENTS
ADD CONSTRAINT microbiologyevents_fk_org_itemid
  FOREIGN KEY (ORG_ITEMID)
  REFERENCES D_ITEMS(ITEMID);

-- ------------
-- OR_EXAM_REPORTS--
-- ------------

-- subject_id
ALTER TABLE OR_EXAM_REPORTS DROP FOREIGN KEY or_exam_reports_fk_subject_id;
ALTER TABLE OR_EXAM_REPORTS
ADD CONSTRAINT or_exam_reports_fk_subject_id
  FOREIGN KEY (SUBJECT_ID)
  REFERENCES PATIENTS(SUBJECT_ID);

-- hadm_id
ALTER TABLE OR_EXAM_REPORTS DROP FOREIGN KEY or_exam_reports_fk_hadm_id;
ALTER TABLE OR_EXAM_REPORTS
ADD CONSTRAINT or_exam_reports_fk_hadm_id
  FOREIGN KEY (HADM_ID)
  REFERENCES ADMISSIONS(HADM_ID);

-- ----------
-- OUTPUTEVENTS--
-- ----------

-- subject_id
ALTER TABLE OUTPUTEVENTS DROP FOREIGN KEY outputevents_fk_subject_id;
ALTER TABLE OUTPUTEVENTS
ADD CONSTRAINT outputevents_fk_subject_id
  FOREIGN KEY (SUBJECT_ID)
  REFERENCES PATIENTS(SUBJECT_ID);

-- hadm_id
ALTER TABLE OUTPUTEVENTS DROP FOREIGN KEY outputevents_fk_hadm_id;
ALTER TABLE OUTPUTEVENTS
ADD CONSTRAINT outputevents_fk_hadm_id
  FOREIGN KEY (HADM_ID)
  REFERENCES ADMISSIONS(HADM_ID);

-- icustay_id
ALTER TABLE OUTPUTEVENTS DROP FOREIGN KEY outputevents_fk_icustay_id;
ALTER TABLE OUTPUTEVENTS
ADD CONSTRAINT outputevents_fk_icustay_id
  FOREIGN KEY (ICUSTAY_ID)
  REFERENCES ICUSTAYS(ICUSTAY_ID);

-- itemid
ALTER TABLE OUTPUTEVENTS DROP FOREIGN KEY outputevents_fk_itemid;
ALTER TABLE OUTPUTEVENTS
ADD CONSTRAINT outputevents_fk_itemid
  FOREIGN KEY (ITEMID)
  REFERENCES D_ITEMS(ITEMID);

-- ---------------
-- PRESCRIPTIONS--
-- ---------------

-- hadm_id
ALTER TABLE PRESCRIPTIONS DROP FOREIGN KEY prescriptions_fk_hadm_id;
ALTER TABLE PRESCRIPTIONS
ADD CONSTRAINT prescriptions_fk_hadm_id
  FOREIGN KEY (HADM_ID)
  REFERENCES ADMISSIONS(HADM_ID);

-- icustay_id
ALTER TABLE PRESCRIPTIONS DROP FOREIGN KEY prescriptions_fk_icustay_id;
ALTER TABLE PRESCRIPTIONS
ADD CONSTRAINT prescriptions_fk_icustay_id
  FOREIGN KEY (ICUSTAY_ID)
  REFERENCES ICUSTAYS(ICUSTAY_ID);


-- ----------
-- SURGERY_VITAL_SIGNS--
-- ----------

-- subject_id
ALTER TABLE SURGERY_VITAL_SIGNS DROP FOREIGN KEY surgery_vital_signs_fk_subject_id;
ALTER TABLE SURGERY_VITAL_SIGNS
ADD CONSTRAINT surgery_vital_signs_fk_subject_id
  FOREIGN KEY (SUBJECT_ID)
  REFERENCES PATIENTS(SUBJECT_ID);

-- hadm_id
ALTER TABLE SURGERY_VITAL_SIGNS DROP FOREIGN KEY surgery_vital_signs_fk_hadm_id;
ALTER TABLE SURGERY_VITAL_SIGNS
ADD CONSTRAINT surgery_vital_signs_fk_hadm_id
  FOREIGN KEY (HADM_ID)
  REFERENCES ADMISSIONS(HADM_ID);

-- itemid
ALTER TABLE SURGERY_VITAL_SIGNS DROP FOREIGN KEY osurgery_vital_signs_fk_itemid;
ALTER TABLE SURGERY_VITAL_SIGNS
ADD CONSTRAINT surgery_vital_signs_fk_itemid
  FOREIGN KEY (ITEMID)
  REFERENCES D_ITEMS(ITEMID);